const { response } = require("express");

const usuariosGet = (req, res = response) => {
  const {nombre} = req.query;
  res.json({
    msg: "get API - controlador",
    nombre
  });
};
const usuariosPost = (req, res = response) => {
  const { nombre, id } = req.body;
  res.json({
    msg: "post API - controlador",
    nombre,
    id,
  });
};
const usuariosPut = (req, res = response) => {
  const { id } = req.params;
  res.json({
    msg: "put API - controlador",
    id,
  });
};
const usuariosPatch = (req, res = response) => {
  res.json({
    msg: "patch API - controlador",
  });
};
const usuariosDelete = (req, res = response) => {
  res.json({
    msg: "delete API - controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
};
