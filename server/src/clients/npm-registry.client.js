const axios = require("axios");
const baseUrl = 'https://registry.npmjs.org';

class NpmRegistryClient {
  package = null;

  async getPackageData(packageName = null) {
    try {
      if (!packageName) return false;
      const response = await axios(`${baseUrl}/${packageName}/latest`);
      if (!response.data) return false;
      return (this.package = response.data);
    } catch (e) {
      console.log('error');
    }
  }

  get dependencies() {
    if (this.package.dependencies && Object.keys(this.package.dependencies).length > 0) {
      return this.package.dependencies;
    }
    return null
  }

  get devDependencies() {
    if (this.package.devDependencies && Object.keys(this.package.devDependencies).length > 0) {
      return this.package.devDependencies;
    }
    return null
  }
}

module.exports = NpmRegistryClient;
