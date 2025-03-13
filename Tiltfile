# Load the restart_process extension
load('ext://restart_process', 'docker_build_with_restart')

# Frontend - force a rebuild to ensure latest image is used
k8s_yaml('kubernetes/frontend.yaml')
docker_build('frontend-image', './frontend')

# Backend
k8s_yaml('kubernetes/backend.yaml')
docker_build_with_restart('backend-image', './backend',
    entrypoint=['node', 'server.js'],
    live_update=[
        sync('./backend', '/app'),
        run('cd /app && npm install', trigger=['./backend/package.json'])
    ]
)

# Port forwards
k8s_resource('frontend', port_forwards='8080:80')
k8s_resource('backend', port_forwards='3000:3000')