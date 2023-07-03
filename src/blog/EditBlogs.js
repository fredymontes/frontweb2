import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = "http://localhost:8000/pedido/"

const ComEditatar =() =>{
    const [Nombre, setNombre ] = useState('')
    const [Telefono, setTelefono] = useState('')
    const [Direccion , setDireccion] = useState('')
    const [Metodo_P, setMetodo_P] = useState('')
    const [comentario, setcomentario] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    // procedimiento para actualizar pedido
    const update = async (eve) => {
        eve.preventDefault()

        await axios.put(URI+id, {
            Nombre: Nombre,
            Telefono: Telefono, 
            Direccion: Direccion, 
            Metodo_P: Metodo_P, 
            comentario: comentario
        })
        navigate('/')
    }
    useEffect(()=>{
        getBlogById()
    },[])

    const getBlogById=async ()=>{
        const res= await axios.get(URI+id)
        setNombre(res.data.Nombre)
        setTelefono(res.data.Telefono)
        setDireccion(res.data.Direccion)
        setMetodo_P(res.data.Metodo_P)
        setcomentario(res.data.comentario)
    }
    return(
        <div div className="container w-25 p-3 bg-secondary">
            <h3> Modificar Pedido</h3>
            <form onSubmit={update}>
                <div className='mb-3'>
                    <label className='form-label'> Nombre </label>
                    <input value={Nombre} onChange={(e)=> setNombre(e.target.value)} type='text' className="form-control" /> </div>
                <div className='mb-3'>
                     <label className='form-label'> Telefono </label> 
                    <input value={Telefono} onChange={(e)=> setTelefono(e.target.value)} type='text' className="form-control" /> </div>
                <div className='mb-3'>
                    <label className='form-label'> Direccion </label> 
                    <input value={Direccion} onChange={(e)=> setDireccion(e.target.value)} type='text' className="form-control" /> </div>
                <div className='mb-3'>
                    <label className='form-label'> Metodo de Pago </label> 
                    <input value={Metodo_P} onChange={(e)=> setMetodo_P(e.target.value)} type='text' className="form-control" /> </div>
                <div className='mb-3'>
                    <label className='form-label'> Comentario </label>
                    <textarea value={comentario} onChange={(e)=> setcomentario(e.target.value)} type='text' className="form-control" /> </div>
                    <button type='submit' className="btn btn-primary">Hacer Pedido</button>
            </form>
        </div>
    )
}

export default ComEditatar

