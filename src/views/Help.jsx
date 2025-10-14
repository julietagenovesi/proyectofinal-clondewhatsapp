import { Link } from "react-router-dom"

const Help = () => {
  return (
    <main className="help">
      <section className="introduccion">
        <h1>Centro de ayuda</h1>
        <h2>Descripción de la aplicación</h2>
        <p>¡Bienvenido/a a Clon de WhatsApp!
          Una aplicación diseñada para chatear con amigos, familiares o compañeros. Te permite enviar y recibir mensajes en tiempo real, manteniendo conversaciones fluidas desde cualquier dispositivo.</p>
      </section>
      <section className="funciones-principales">
        <h3>Funciones principales</h3>
        <div className="contenedor-funciones">
          <div>
            <i className='bx bx-menu'></i>
            <h4> Sidebar</h4>
            <p> En el panel lateral vas a encontrar tu <strong> lista de contactos </strong> junto con <strong>un buscador, </strong> al hacer click te permite escribir el nombre de la persona con la que querés chatear.</p>
          </div>
          <div className="contenedor-chats">
            <i className='bx bx-chat'></i>
            <h4> Chats individuales</h4>
            <p> Con solo hacer clic en un contacto, accedés al <strong>chat personalizado</strong> con esa persona.
              Podés ver todos los mensajes enviados y recibidos, junto con la hora de envío y un encabezado con la información del contacto <small>(nombre y última vez que usó la app)</small>.</p>
          </div>
          <div>
            <i className='bx bx-send'></i>
            <h4> Envío de mensajes</h4>
            <p> Dentro de cada chat podés escribir tus mensajes en el campo de texto y enviarlos presionando el botón de envío.
              Los mensajes se muestran instantáneamente en pantalla, creando una conversación en tiempo real.</p>
          </div>
        </div>
      </section>

      <section>
        <h3>Configuración</h3>
        <p>En la parte derecha de cada contacto vas a encontrar el <strong>botón de configuración</strong>, que abre un pop up con opciones para <strong>personalizar tu experiencia</strong>:</p>
        <ul>
          <li><strong>Modo oscuro:</strong> Activá o desactivá el modo oscuro con un switch. Por defecto la app está en modo claro, pero podés cambiarla a oscuro para un estilo más cómodo a la vista.</li>
          <li><strong>Cambiar nombre:</strong> Modificá tu nombre de usuario cuando quieras.</li>
        </ul>

        <p>En la parte superior del sidebar vas a encontrar el <strong>botón de cerrar sesión.</strong></p>
        <ul>
          <li><strong>Cerrar sesión:</strong> Te permite cerrar tu sesión y volver a la pantalla de inicio de sesión. Para volver a acceder a tus chats, solo tenés que ingresar tu contraseña nuevamente.</li>
        </ul>
      </section>

      <p><strong>Importante: </strong>Una vez que cerrás sesión, la única forma de volver a los chats es iniciando sesión nuevamente.</p>
      <Link to="/chat" title="volver al chat"><i className='bx bx-arrow-back'></i></Link>
    </main>
  )
}

export { Help }