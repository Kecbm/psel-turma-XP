const ativoModel = require('../models/ativoModel');

const quantity = async (id) => {
  const ativo = await ativoModel.quantity(id);

  return ativo;
};

const getByClient = async (id) => {
  const client = await ativoModel.getByClient(id);

  return client;
};

const getByAssets = async (id) => {
  const ativo = await ativoModel.getByAssets(id);

  return ativo;
};

module.exports = {
  quantity,
  getByClient,
  getByAssets,
};