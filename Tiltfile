load('ext://restart_process', 'docker_build_with_restart')

docker_compose('docker-compose.yml')

docker_build(
  'backend',
  'backend',
  dockerfile='backend/Dockerfile',
  live_update = [
    sync('.', '/app/backend'),
    sync('utils', '/app/utils'),
    restart_container()
  ]
)
