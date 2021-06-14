import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import Order from './Order'
import './Orders.css'
import { useStateValue } from './StateProvider'

function Orders() {

    const [orders,setOrders] = useState([])
    const [state,dispatch] = useStateValue()
    const {user,basket} = state

    useEffect(()=>{
        if(user){
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created','desc')
            .onSnapshot(snapshot=>{
                // console.log("snapshot",snapshot.docs.map(item=>console.log(item.data())))
                // setOrders(snapshot.docs.map(doc=>{
                //     id:doc.id,
                //     data:doc.data()
                // }))
                const newOrders = snapshot.docs.map(doc => {
                    return{
                        id:doc.id,
                        data:doc.data()
                    }
                })
                // console.log("new order",newOrders)
                setOrders(newOrders)
            })
        }
        else{
            setOrders([])
        }
      
    },[user])
    
    return (
        <div className="orders">
            {console.log("orders",orders)}
            <h1>Your Orders</h1>
            <div className="orders__order">
                {orders?.map(order=><Order order={order} />
                )}
            </div> 
        </div>
    )
}

export default Orders
