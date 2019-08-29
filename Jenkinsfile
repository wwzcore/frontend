//Jenkinsfile (Declarative Pipeline)
pipeline{
    agent {label "frontend"}
    //���û�������
    environment { 
        JENKINS_HOME = '/home/frontend'
    }
    stages {
        stage('Build') {
            steps{
                //����ж��е���������Ҫ����������
                //���ֻ��һ������������һ������
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
                //���������ӵ����ȥ
                sh """
                    cd  $JENKINS_HOME/workspace/frontend/dist
                    tar -cvf dist.tar .
                """
                echo 'hello world'
                sh """
                    ssh zxg1990@docker.for.mac.host.internal "cd /Users/zxg1990/src/demo/front-end-backend-demo/front-end;mkdir temp;mv * temp"
                    scp $JENKINS_HOME/workspace/frontend/dist/dist.tar \
                        zxg1990@docker.for.mac.host.internal:/Users/zxg1990/src/demo/front-end-backend-demo/front-end/
                """
                //����������
                archiveArtifacts artifacts: '*/*.tar', fingerprint: true
                //��չ�����
                cleanWs()

               
            }
        }
        stage('Restart') {
            steps {
                echo "This is restart serve"
                 //��������
                //��ͣ����
                 //
                 //
                sh """
                 ssh zxg1990@docker.for.mac.host.internal "cd /Users/zxg1990/src/demo/front-end-backend-demo/front-end;tar -xvf dist.tar"
                 ssh zxg1990@docker.for.mac.host.internal "cd /Users/zxg1990/src/demo/front-end-backend-demo/;sh servedown.sh"
                 ssh zxg1990@docker.for.mac.host.internal "cd /Users/zxg1990/src/demo/front-end-backend-demo/;sh serveup.sh"
                 """
            }

        }

    }
}