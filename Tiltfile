load('ext://restart_process', 'docker_build_with_restart')

docker_compose('docker-compose.yml')

docker_build(
  'tilt-project_backend',
  '.',
  dockerfile='backend/Dockerfile',
  live_update = [
    sync('backend', '/app/backend'),
    sync('utils', '/app/utils'),
    # run('chmod +x /app/setup/setup.sh && /app/setup/setup.sh'),
    restart_container()
  ]
)
