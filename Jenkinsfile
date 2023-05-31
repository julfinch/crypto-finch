pipeline {
  agent any
  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }
  stages {
    stage('Build') {
      steps {
        bat 'docker build . -t julfinch/crypto-finch:latest'
      }
    }
    stage('Push') {
      steps {
        withDockerRegistry([ credentialsId: "dockerHub", url: "" ]) {
        bat 'docker push julfinch/crypto-finch:latest'
        }
      }
    }
    // stage('Deploying React.js container to Kubernetes') {
    //   steps {
    //     script {
    //       kubernetesDeploy(configs: "deployment.yaml", "service.yaml")
    //     }
    //   }
    // }
  }
  post {
    always {
      bat 'docker logout'
    }
  }
}