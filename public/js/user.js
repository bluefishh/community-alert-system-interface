document.addEventListener('DOMContentLoaded', function() {   
    // Crear nuevo usuario 
    document.querySelector('#crear-usuario').addEventListener('click', function() {
        Swal.fire({
            title: 'Nuevo usuario',
            customClass: {
                popup: 'swal-nunito',
                title: 'swal-title-custom'
            },
            showCloseButton: true,
            html:
                `<form id="usuarioForm">
                    <div class="mb-3">
                        <label for="primerNombre" class="form-label">Primer nombre</label>
                        <input type="text" id="primerNombre" class="swal2-input form-control" required>
                    </div>
                    <div class="mb-3">
                        <label for="segundoNombre" class="form-label">Segundo nombre</label>
                        <input type="text" id="segundoNombre" class="swal2-input form-control">
                    </div>
                    <div class="mb-3">
                        <label for="primerApellido" class="form-label">Primer apellido</label>
                        <input type="text" id="primerApellido" class="swal2-input form-control" required>
                    </div>
                    <div class="mb-3">
                        <label for="segundoApellido" class="form-label">Segundo apellido</label>
                        <input type="text" id="segundoApellido" class="swal2-input form-control">
                    </div>
                    <div class="mb-3">
                        <label for="correo" class="form-label">Correo</label>
                        <input type="email" id="correo" class="swal2-input form-control" required>
                    </div>
                    <div class="mb-3">
                        <label for="contrasena" class="form-label">Contraseña</label>
                        <input type="password" id="contrasena" class="swal2-input form-control" required>
                    </div>
                    <div class="mb-3">
                        <label for="rol" class="form-label">Rol</label>
                        <select id="rol" class="swal2-select form-select" required>
                            <option value="">Seleccione un rol</option>
                            <option value="residente">Residente</option>
                            <option value="admin">Administrador</option>
                            <option value="lider_comunitarop">Líder comunitario</option>
                        </select>
                    </div>
                </form>`,
            showCancelButton: true,
            confirmButtonText: 'Crear',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('¡Usuario creado!', 'El nuevo usuario ha sido creado exitosamente.', 'success');
            }
        });
    });

    // Eliminar usuario
    document.querySelectorAll('.eliminar-usuario').forEach(btn => {
        btn.addEventListener('click', function() {
            const usuarioId = this.getAttribute('data-id');
            Swal.fire({
                title: '¿Estás seguro?',
                text: "¡No podrás deshacer esta acción!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Aquí se puede agregar la lógica para eliminar el usuario
                    Swal.fire('¡Eliminado!', 'El usuario ha sido eliminado.', 'success');
                }
            });
        });
    });

    // Editar usuario
    document.querySelectorAll('.editar-usuario').forEach(btn => {
        btn.addEventListener('click', function() {
            Swal.fire({
                title: 'Editar usuario',
                customClass: {
                    popup: 'swal-nunito',
                    title: 'swal-title-custom'
                },
                showCloseButton: true,
                html:
                    `<form id="usuarioEditForm">
                        <div class="mb-3">
                            <label for="editPrimerNombre" class="form-label">Primer nombre</label>
                            <input type="text" id="editPrimerNombre" class="swal2-input form-control" required>
                        </div>
                        <div class="mb-3">
                            <label for="editSegundoNombre" class="form-label">Segundo nombre</label>
                            <input type="text" id="editSegundoNombre" class="swal2-input form-control">
                        </div>
                        <div class="mb-3">
                            <label for="editPrimerApellido" class="form-label">Primer apellido</label>
                            <input type="text" id="editPrimerApellido" class="swal2-input form-control" required>
                        </div>
                        <div class="mb-3">
                            <label for="editSegundoApellido" class="form-label">Segundo apellido</label>
                            <input type="text" id="editSegundoApellido" class="swal2-input form-control">
                        </div>
                        <div class="mb-3">
                            <label for="editCorreo" class="form-label">Correo</label>
                            <input type="email" id="editCorreo" class="swal2-input form-control" required>
                        </div>
                        <div class="mb-3">
                            <label for="editContrasena" class="form-label">Contraseña</label>
                            <input type="password" id="editContrasena" class="swal2-input form-control" required>
                        </div>
                        <div class="mb-3">
                            <label for="editRol" class="form-label">Rol</label>
                            <select id="editRol" class="swal2-select form-select" required>
                                <option value="">Seleccione un rol</option>
                                <option value="residente">Residente</option>
                                <option value="admin">Administrador</option>
                                <option value="lider_comunitarop">Líder comunitario</option>
                            </select>
                        </div>
                    </form>`,
                showCancelButton: true,
                confirmButtonText: 'Actualizar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('¡Usuario actualizado!', 'Los datos del usuario han sido actualizados exitosamente.', 'success');
                }
            });
        });   
    });
});