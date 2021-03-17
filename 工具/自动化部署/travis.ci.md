## job继承
```cmd
language: node_js
node_js: 14

env:
  global:
    - TEST_NAME=test
  jobs:
    - TEST_NAME=cypress

_shared_job: &shared_job
  script: echo "shared script config"
jobs:
  allow_failures:
    - node_js: 14
      env: TEST_NAME=cypress

  include:
  - name: Job 1
    <<: *shared_job
  - name: Job 2
    <<: *shared_job
  - name: job 3
    language: python
    python: 3.8
    script:
    - python -c "print('Hi from Python!')"
  - name: job 4
    language: node_js
    node_js: 14
    script:
    - node -e "console.log('Hi from NodeJS!')"
```