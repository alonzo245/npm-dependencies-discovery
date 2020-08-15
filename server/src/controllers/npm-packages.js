const NpmRegistryClient = require("../clients/npm-registry.client");

exports.getNpmPackageDependencies = async (req, res) => {
  try {
    const { packageName } = req.params;
    const npmRegistryClient = new NpmRegistryClient();
    const data = await npmRegistryClient.getPackageData(packageName);

    return res.status(200).json({
      status: !data ? "failed" : "success",
      name: packageName,
      dependencies: npmRegistryClient.dependencies,
      devDependencies: npmRegistryClient.devDependencies,
    });
  } catch (e) {
    console.log(e);
    return res.json({
      status: "failed",
    });
  }
};
