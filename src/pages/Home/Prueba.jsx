import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDomicileDetails } from '../../Slices/apiDomicileSlice';

const Prueba = () => {
  const dispatch = useDispatch();
  const domicileData = useSelector(state => state.domicile);

  useEffect(() => {
    dispatch(fetchDomicileDetails());
  }, [dispatch]);

  return (
    <div>
      {/* Si estás cargando los datos */}
      {console.log(domicileData.data)}
      {domicileData.loading && <p>Cargando...</p>}
      {/* Si hubo un error al cargar los datos */}
      {domicileData.error && <p>Error: {domicileData.error}</p>}
      
      {/* Si los datos han sido cargados */}
      {domicileData.data && (
        <div>
          {/* Renderiza los datos recibidos de la API aquí */}
          {/* Por ejemplo, si domicileData.data es un objeto, puedes acceder a sus propiedades */}
          <p>Id: {domicileData.data[0].id}</p>
          <p>addresses: {domicileData.data[0].addresses}</p>
          <p>apt: {domicileData.data[0].apt}</p>
          <p>typeClean: {domicileData.data[0].typeClean}</p>
          <p>time: {domicileData.data[0].time}</p>
          <p>imageDomicile: {domicileData.data[0].imageDomicile}</p>
          <br></br>
          <br></br>
          <p>Id: {domicileData.data[1].id}</p>
          <p>addresses: {domicileData.data[1].addresses}</p>
          <p>apt: {domicileData.data[1].apt}</p>
          <p>typeClean: {domicileData.data[1].typeClean}</p>
          <p>time: {domicileData.data[1].time}</p>
          <p>imageDomicile: {domicileData.data[1].imageDomicile}</p>


        </div>
      )}
    </div>
  );
};

export default Prueba;
