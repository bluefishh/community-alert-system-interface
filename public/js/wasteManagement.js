document.addEventListener('DOMContentLoaded', function() {
    // Editar horario de recolección
    document.querySelectorAll('.editar-horario').forEach(btn => {
        btn.addEventListener('click', function() {
            Swal.fire({
                title: 'Editar horario',
                customClass: {
                    popup: 'swal-nunito',
                    title: 'swal-title-custom'
                },
                showCloseButton: true,
                html: `
                    <form id="horarioForm">
                        <div class="mb-3">
                            <label for="dia" class="form-label">Día</label>
                            <input type="text" id="dia" class="swal2-input form-control" value="" readonly disabled>
                        </div>
                        <div class="mb-3">
                            <label for="nuevoHorario" class="form-label">Nuevo horario</label>
                            <input type="text" id="nuevoHorario" class="swal2-input form-control" value="" required>
                        </div>
                    </form>
                `,
                showCancelButton: true,
                confirmButtonText: 'Guardar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('¡Horario actualizado!', `El horario ha sido actualizado.`, 'success');
                }
            });
        });
    });

    // Crear campaña de reciclaje
    document.querySelectorAll('#crear-campannia').forEach(btn => {
        btn.addEventListener('click', function() {
            Swal.fire({
                title: 'Nueva campaña de reciclaje',
                customClass: {
                    popup: 'swal-nunito',
                    title: 'swal-title-custom'
                },
                showCloseButton: true,
                html: `
                    <form id="campañaForm">
                        <div class="mb-3">
                            <label for="nombre" class="form-label">Nombre de la campaña</label>
                            <input type="text" id="nombre" class="swal2-input form-control" placeholder=" " required>
                        </div>
                        <div class="mb-3">
                            <label for="descripcion" class="form-label">Descripción</label>
                            <textarea id="descripcion" class="swal2-textarea form-control" placeholder=" " required></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="fecha_campannia" class="form-label">Fecha de la campaña</label>
                            <input type="date" id="fecha_campannia" class="swal2-input form-control" required>
                        </div>
                        <div class="mb-3">
                            <label for="hora" class="form-label">Hora</label>
                            <input type="time" id="hora" class="swal2-input form-control" required>
                        </div>
                        <div class="mb-3">
                            <label for="lugar" class="form-label">Lugar</label>
                            <input type="text" id="lugar" class="swal2-input form-control" placeholder=" " required>
                        </div>
                    </form>
                `,
                showCancelButton: true,
                confirmButtonText: 'Crear',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('¡Campaña creada!', `La campaña ha sido creada exitosamente.`, 'success');
                }
            });
        });
    });

    // Eliminar campaña de reciclaje
    document.querySelectorAll('.eliminar-campannia').forEach(button => {
        button.addEventListener('click', function() {
            Swal.fire({
                title: '¿Estás seguro?',
                text: 'Esta campaña será eliminada permanentemente.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('¡Eliminada!', 'La campaña ha sido eliminada.', 'success');
                }
            });
        });
    });

    // Editar campaña de reciclaje
    document.querySelectorAll('.editar-campannia').forEach(button => {
        button.addEventListener('click', function() {
            Swal.fire({
                title: 'Editar campaña',
                customClass: {
                    popup: 'swal-nunito',
                    title: 'swal-title-custom'
                },
                showCloseButton: true,
                html: `
                    <form id="campaniaEditForm">
                        <div class="mb-3">
                            <label for="editNombre" class="form-label">Nombre de la campaña</label>
                            <input type="text" id="editNombre" class="swal2-input form-control" required>
                        </div>
                        <div class="mb-3">
                            <label for="editDescripcion" class="form-label">Descripción</label>
                            <textarea id="editDescripcion" class="swal2-textarea form-control" required></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="editFecha" class="form-label">Fecha de la campaña</label>
                            <input type="date" id="editFecha" class="swal2-input form-control" required>
                        </div>
                        <div class="mb-3">
                            <label for="editHora" class="form-label">Hora</label>
                            <input type="time" id="editHora" class="swal2-input form-control" required>
                        </div>
                        <div class="mb-3">
                            <label for="editLugar" class="form-label">Lugar</label>
                            <input type="text" id="editLugar" class="swal2-input form-control" required>
                        </div>
                    </form>
                `,
                showCancelButton: true,
                confirmButtonText: 'Actualizar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('¡Campaña actualizada!', 'Los cambios se han guardado correctamente', 'success');
                }
            });
        });
    });

    // Ver campaña
    document.querySelectorAll('.ver-campannia').forEach(button => {
        button.addEventListener('click', function() {
            Swal.fire({
                title: 'Campaña',
                html: `
                    <div style="text-align:left">
                        <b>Descripción:</b><br><br>
                        <b>Fecha:</b> <br>
                        <b>Hora:</b> <br>
                        <b>Lugar:</b><br>
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
                    Swal.fire('¡Campaña aprobada!', 'La campaña ha sido aprobada exitosamente.', 'success');
                } else if (result.isDenied) {
                    Swal.fire('¡Campaña rechazada!', 'La campaña ha sido rechazada.', 'error');
                }
            });
        });
    });

    // Crear punto de reciclaje
    document.querySelectorAll('#crear-punto').forEach(btn => {
        btn.addEventListener('click', function() {
            Swal.fire({
                title: 'Nuevo punto de reciclaje',
                customClass: {
                    popup: 'swal-nunito',
                    title: 'swal-title-custom'
                },
                showCloseButton: true,
                html: `
                    <form id="puntoForm">
                        <div class="mb-3">
                            <label for="nombrePunto" class="form-label">Nombre del punto</label>
                            <input type="text" id="nombrePunto" class="swal2-input form-control" required>
                        </div>
                        <div class="mb-3">
                            <label for="direccionPunto" class="form-label">Dirección</label>
                            <input type="text" id="direccionPunto" class="swal2-input form-control" required>
                        </div>
                    </form>
                `,
                showCancelButton: true,
                confirmButtonText: 'Crear',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    const nombrePunto = document.getElementById('nombrePunto').value;
                    Swal.fire('¡Punto creado!', `El punto ha sido creado exitosamente.`, 'success');
                }
            });
        });
    });

    // Editar punto de reciclaje
    document.querySelectorAll('.editar-punto').forEach(button => {
        button.addEventListener('click', function() {
            Swal.fire({
                title: 'Editar punto de reciclaje',
                customClass: {
                    popup: 'swal-nunito',
                    title: 'swal-title-custom'
                },
                showCloseButton: true,
                html: `
                    <form id="puntoEditForm">
                        <div class="mb-3">
                            <label for="editNombrePunto" class="form-label">Nombre del punto</label>
                            <input type="text" id="editNombrePunto" class="swal2-input form-control" required>
                        </div>
                        <div class="mb-3">
                            <label for="editDireccionPunto" class="form-label">Dirección</label>
                            <input type="text" id="editDireccionPunto" class="swal2-input form-control" required>
                        </div>
                    </form>
                `,
                showCancelButton: true,
                confirmButtonText: 'Actualizar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('¡Punto actualizado!', 'Los cambios se han guardado correctamente', 'success');
                }
            });
        });
    });

    // Eliminar punto de reciclaje
    document.querySelectorAll('.eliminar-punto').forEach(button => {
        button.addEventListener('click', function() {
            Swal.fire({
                title: 'Eliminar punto de reciclaje',
                text: '¿Estás seguro de que deseas eliminar este punto de reciclaje?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('¡Punto eliminado!', 'El punto de reciclaje ha sido eliminado correctamente.', 'success');
                }
            });
        });
    });
});