import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
// 使我们可以转换货币类型
loadType(mongoose);


const PRODUCTSchema = new Schema(
    {
        price:{
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100
        },
        expense:{
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100
        },
        transactions:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:"Transaction",
                // 引用Transaction对象
            }
        ],
    },
    { toJSON: { getters: true },timestamps:true }
);

const Product = mongoose.model("PRODUCT", PRODUCTSchema);

export default Product;