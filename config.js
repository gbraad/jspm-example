System.config({
  "baseURL": "/",
  "transpiler": "6to5",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js"
  },
  "map": {
    "jquery": "github:components/jquery@2.1.3"
  }
});
