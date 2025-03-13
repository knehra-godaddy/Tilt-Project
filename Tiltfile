load('ext://restart_process', 'docker_build_with_restart')

docker_compose('docker-compose.yml')

docker_build(
  'tilt-project_backend',
  'backend',
  dockerfile='backend/Dockerfile',
  live_update = [
    sync('backend', '/app'),
    #sync('../utils', '/app/utils'),
    # run('chmod +x /app/setup/setup.sh && /app/setup/setup.sh'),
    restart_container()
  ]
)
