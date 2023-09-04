const {DetailsOrder} = require('../db/models/details.order')

const getOrderDetails = async (req, res) => {
  try {
    const orderDetails = await DetailsOrder.findAll();
    res.status(200).json(orderDetails);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
};
const getOrderDetailsById = async (req, res) => {
  const {id} = req.params
  try {
    const orderDetail = await DetailsOrder.findOne({
      where:{
        order_id:id
      }
    });
    if(!orderDetail){
      res.status(404).send('order details not found')
    }
    res.status(200).json(orderDetail);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {getOrderDetails, getOrderDetailsById}