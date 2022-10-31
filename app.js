/***** Solución 1 *****/
generarIdUnico1 = () => { 
  return Math.random().toString(30).substring(2); 
} 

// Llamamos a la función 'generarIdUnico()' 
generarIdUnico1(); 

// Obtenemos 
'7n805l8n5f2' 


/***** Solución 2 *****/ 
generarIdUnico2 = () => { 
  return 'nnnnnnnnnnnnnnnnnnnnnnnnnnnnn-nnnn-7nnn-tnnn-nnnnnnnnnnnn'.replace(/[nt]/g, function(c) { 
    var r = Math.random() * 16 | 0, v = c == 'n' ? r : (r & 0x3 | 0x8); 
    return v.toString(16); }); } 

// Llamamos a la función 'generarIdUnico()' 
generarIdUnico2(); 

// Obtenemos 
'8e6fd0abda72f77c628a16aaa3757-1bad-7ed1-ac8f-a2e2304dc9e6'
