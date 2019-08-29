//Jenkinsfile (Declarative Pipeline)
pipeline{
    agent {label "frontend"}
    //设置环境变量
    environment { 
        JENKINS_HOME = '/home/frontend'
        LANG='C.UTF-8'
    }
    stages {
        stage('Build') {
            steps{
                //如果有多行的命令，则必须要加三个引号
                //如果只有一行命令，则可以是一个引号
                sh """ 
                    yarn install
                    yarn build
                    """
                echo 'This is a build step' 
            }
        }
        stage('Test') {
            steps{
                echo 'This is a test step'  
            }
        }
        stage('Deploy') {
            steps{
                echo 'This is a deploy step'
                //将产出物扔到外边去
                sh """
                    cd  $JENKINS_HOME/workspace/frontend/dist
                    tar -cvf dist.tar .
                """
                echo 'hello world'
                sh """
                    ssh zxg1990@docker.for.mac.host.internal "cd /Users/zxg1990/src/demo/front-end-backend-demo/front-end"
                    scp $JENKINS_HOME/workspace/frontend/dist/dist.tar \
                        zxg1990@docker.for.mac.host.internal:/Users/zxg1990/src/demo/front-end-backend-demo/front-end/
                """
                //保留产出物
                archiveArtifacts artifacts: '*/*.tar', fingerprint: true
                //清空工作区
                cleanWs()

               
            }
        }
        stage('Restart') {
            steps {
                echo "This is restart serve"
                 //重启服务
                //先停服务
                 //
                 //
                sh """
                 ssh zxg1990@docker.for.mac.host.internal "cd /Users/zxg1990/src/demo/front-end-backend-demo/front-end;tar -xvf dist.tar;rm -f dist.tar"
                 ssh zxg1990@docker.for.mac.host.internal "cd /Users/zxg1990/src/demo/front-end-backend-demo/;sh servedown.sh"
                 ssh zxg1990@docker.for.mac.host.internal "cd /Users/zxg1990/src/demo/front-end-backend-demo/;sh serveup.sh"
                 """
            }

        }

    }
}