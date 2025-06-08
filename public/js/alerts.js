document.addEventListener('DOMContentLoaded', function() {
    // Crear alerta
    document.querySelector('#crear-alerta').addEventListener('click', function() {
        Swal.fire({
            title: 'Nueva alerta',
            customClass: {
                popup: 'swal-nunito',
                title: 'swal-title-custom'
            },
            showCloseButton: true,
            html:
                `<form id="alertaForm">
                    <div class="mb-3">
                        <label for="titulo" class="form-label">Título de la alerta</label>
                        <input type="text" id="titulo" class="swal2-input form-control" placeholder=" " required>
                    </div>
                    <div class="mb-3">
                        <label for="tipo" class="form-label">Tipo de alerta</label>
                        <select id="tipo" class="swal2-select form-select" required>
                            <option value="">Seleccione una opción</option>
                            <option value="seguridad">Seguridad</option>
                            <option value="emergencia">Emergencia</option>
                            <option value="comunidad">Comunidad</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="descripcion" class="form-label">Descripción</label>
                        <textarea id="descripcion" class="swal2-textarea form-control" placeholder=" " required></textarea>
                    </div>
                </form>`,
            showCancelButton: true,
            confirmButtonText: 'Publicar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('¡Alerta enviada!', 'La alerta se envió a los encargados para su aprobación', 'success');
            }
        });
    });

    // Eliminar alerta
    document.querySelectorAll('.eliminar-alerta').forEach(button => {
        button.addEventListener('click', function() {
            Swal.fire({
                title: '¿Estás seguro?',
                text: 'Esta alerta será eliminada permanentemente.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('¡Eliminada!', 'La alerta ha sido eliminada.', 'success');
                }
            });
        });
    });

    // Editar alerta
    document.querySelectorAll('.editar-alerta').forEach(button => {
        button.addEventListener('click', function() {
            Swal.fire({
                title: 'Editar alerta',
                customClass: {
                    popup: 'swal-nunito',
                    title: 'swal-title-custom'
                },
                showCloseButton: true,
                html:
                    `<form id="editarAlertaForm">
                        <div class="mb-3">
                            <label for="tituloEditar" class="form-label">Título de la alerta</label>
                            <input type="text" id="tituloEditar" class="swal2-input form-control" placeholder=" " required>
                        </div>
                        <div class="mb-3">
                            <label for="tipoEditar" class="form-label">Tipo de alerta</label>
                            <select id="tipoEditar" class="swal2-select form-select" required>
                                <option value="">Seleccione una opción</option>
                                <option value="seguridad">Seguridad</option>
                                <option value="emergencia">Emergencia</option>
                                <option value="comunidad">Comunidad</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="descripcionEditar" class="form-label">Descripción</label>
                            <textarea id="descripcionEditar" class="swal2-textarea form-control" placeholder=" " required></textarea>
                        </div>
                    </form>`,
                showCancelButton: true,
                confirmButtonText: 'Actualizar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('¡Alerta actualizada!', 'Los cambios se han guardado correctamente', 'success');
                }
            });
        });
    });

    // Ver alerta
    document.querySelectorAll('.ver-alerta').forEach(button => {
        button.addEventListener('click', function() {;
            Swal.fire({
                title: 'Alerta',
                html: `
                    <div style="text-align:left">
                        <b>Tipo:</b><br>
                        <b>Descripción:</b><br><br>
                        <b>Fecha:</b><br>
                        <b>Estado:</b>
                    </div>
                `,
                icon: 'info',
                customClass: {
                    popup: 'swal-nunito',
                    title: 'swal-title-custom'
                },
                showCloseButton: true,
                showDenyButton: true,
                confirmButtonText: 'Aprobar',
                denyButtonText: 'Rechazar'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('¡Alerta aprobada!', 'La alerta ha sido aprobada exitosamente.', 'success');
                } else if (result.isDenied) {
                    Swal.fire('¡Alerta rechazada!', 'La alerta ha sido rechazada.', 'info');
                }
            });
        });
    });
});