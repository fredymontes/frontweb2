import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/pedido/"

const CompCreateBlog =()=>{
    const [Nombre, setNombre ] = useState('')
    const [Telefono, setTelefono] = useState('')
    const [Direccion , setDireccion] = useState('')
    const [Metodo_P, setMetodo_P] = useState('')
    const [comentario, setcomentario] = useState('')
    const navigate = useNavigate()

    //procedimiento de envio de pedido
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {Nombre: Nombre,Telefono: Telefono, Direccion: Direccion, Metodo_P: Metodo_P, comentario: comentario})
        navigate('/')
    }
    

    return(
        <div className="container w-25 p-3 bg-secondary">
            <h3> Crear Pedido</h3>
            <form onSubmit={store}>
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

export default CompCreateBlog

