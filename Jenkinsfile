//Jenkinsfile (Declarative Pipeline)
pipeline{
    agent {label "frontend"}
    //���û�������
    environment { 
        JENKINS_HOME = '/home'
    }
    triggers{
        pollSCM('*/30 * * * *')
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
                    ssh zxg1990@docker.for.mac.host.internal "cd /Users/zxg1990/src/demo/front-end-backend-demo/frond-end/;rm -rf *"
                    scp $JENKINS_HOME/workspace/frontend/dist.tar \
                        zxg1990@docker.for.mac.host.internal:/Users/zxg1990/src/demo/front-end-backend-demo/frond-end/
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
                sh """
                 ssh zxg1990@docker.for.mac.host.internal "cd /Users/zxg1990/src/demo/front-end-backend-demo/frond-end;tar -xvf dist.tar"
                 ssh zxg1990@docker.for.mac.host.internal "cd /Users/zxg1990/src/demo/front-end-backend-demo/;sh servedown.sh"
                 ssh zxg1990@docker.for.mac.host.internal "cd /Users/zxg1990/src/demo/front-end-backend-demo/;sh serveup.sh"
                 """
            }

        }

    }
}