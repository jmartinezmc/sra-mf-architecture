const { ModuleFederationPlugin } = require("webpack").container;

const deps = require("./package.json").dependencies;

module.exports = () => ({
  webpack: {
    configure: {
      output: {
        publicPath: "auto",
      },
    },
    optimization: {
      minimize: false,
      runtimeChunk: true,
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "container",
          filename: "remoteEntry.js",
          remotes: {
            laboratorio: lazyLoadRemote(
              "http://localhost:3001/remoteEntry.js",
              "laboratorio"
            ),
            socios: lazyLoadRemote(
              "http://localhost:3002/remoteEntry.js",
              "socios"
            ),
          },
          shared: {
            ...deps,
            tsconfig: {
              singleton: true,
            },
            ui: {
              singleton: true,
            },
            react: {
              singleton: true,
              requiredVersion: deps.react,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: deps["react-dom"],
            },
          },
        }),
      ],
    },
  },
});

function lazyLoadRemote(remoteUrl, appName) {
  return `promise new Promise(resolve => {
    const script = document.createElement('script')
    script.src = '${remoteUrl}'
    script.onload = () => {
      // remote cargado y disponibles
      const proxy = {
        get: (request) => {
          return window.${appName}.get(request);
        },
        init: (arg) => {
          try {
            return window.${appName}.init(arg)
          } catch(e) {
            console.log('remote container inicializado')
          }
        }
      }
      resolve(proxy)
    }
    script.onerror = (error) => {
      console.error('error cargando remote container')
      const proxy = {
        get: (request) => {
          // si el consumer está muerto, renderizar esto
          return Promise.resolve(() => () => "I'm a dead shell of an app. Reload later.");
        },
        init: (arg) => {
          return;
        }
      }
      resolve(proxy)
    }
    document.head.appendChild(script);
  })`;
}
