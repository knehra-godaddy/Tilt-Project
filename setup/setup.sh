function build_node_utils() {
    echo "doing sylinks"
    symlink_to_backend
}

function build_backend() {
    cd ../backend

    npm i

    build_node_utils
}

function symlink_to_backend() {
  echo "symlink utils to backend"
  cd ../backend/node_modules || exit 1
  echo "$(pwd)"
  ln -sfn ../../utils poynt
}

build_backend