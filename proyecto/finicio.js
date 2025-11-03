document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault(); 

      const usuario = document.getElementById("usuario").value.trim();
      const clave = document.getElementById("clave").value.trim();
      const mensaje = document.getElementById("mensaje");

      if (usuario && clave) {
      
        localStorage.setItem("usuario", usuario);
        localStorage.setItem("clave", clave);

        
        mensaje.innerHTML = `
          <div class="alert alert-success" role="alert">
            ✅ <strong>Datos capturados correctamente.</strong><br><br>
            <b>Usuario:</b> ${usuario}<br>
            <b>Contraseña:</b> ${clave}
          </div>
        `;

        // Redirigir después de 2 segundos
        setTimeout(() => {
          window.location.href = "index.html"; 
        }, 2000);
      } else {
        mensaje.innerHTML = `
          <div class="alert alert-danger" role="alert">
            ⚠️ Por favor, llena todos los campos.
          </div>
        `;
      }
    });