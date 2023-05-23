pipeline {
  agent any
  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }
  environment {
    DOCKERHUB_CREDENTIALS = credentials('julfinch-dockerhub')
  }
  stages {
    stage('Build') {
      steps {
        bat 'docker build . -t julfinch/crypto-finch:latest'
      }
    }
    stage('Login') {
      steps {
        bat 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
      }
    }
    stage('Push') {
      steps {
        bat 'docker push julfinch/crypto-finch:latest'
      }
    }
  }
  post {
    always {
      bat 'docker logout'
    }
  }
}