document.addEventListener('DOMContentLoaded', function() {
    // Crear oferta
    document.querySelector('#crear-oferta').addEventListener('click', function() {
        Swal.fire({
            title: 'Nueva oferta',
            customClass: {
                popup: 'swal-nunito',
                title: 'swal-title-custom'
            },
            showCloseButton: true,
            html:
                `<form id="ofertaForm">
                    <div class="mb-3">
                        <label for="nombre_negocio" class="form-label">Nombre del negocio</label>
                        <input type="text" id="nombre_negocio" class="swal2-input form-control" required>
                    </div>
                    <div class="mb-3">
                        <label for="direccion_negocio" class="form-label">Dirección del negocio</label>
                        <input type="text" id="direccion_negocio" class="swal2-input form-control" required>
                    </div>
                    <div class="mb-3">
                        <label for="descuento" class="form-label">Descuento (ej: -20%, 2x1)</label>
                        <input type="text" id="descuento" class="swal2-input form-control" required>
                    </div>
                    <div class="mb-3">
                        <label for="fecha_vigencia" class="form-label">Fecha de vigencia</label>
                        <input type="date" id="fecha_vigencia" class="swal2-input form-control" required>
                    </div>
                    <div class="mb-3">
                        <label for="descripcion" class="form-label">Descripción</label>
                        <textarea id="descripcion" class="swal2-textarea form-control" required></textarea>
                    </div>
                </form>`,
            showCancelButton: true,
            confirmButtonText: 'Crear',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('¡Oferta creada!', 'La nueva oferta ha sido creada exitosamente.', 'success');
            }
        });
    });

    // Eliminar oferta
    document.querySelectorAll('.eliminar-oferta').forEach(btn => {
        btn.addEventListener('click', function() {
            const ofertaId = this.getAttribute('data-oferta-id');
            Swal.fire({
                title: '¿Estás seguro?',
                text: "Esta acción no se puede deshacer.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('¡Oferta eliminada!', 'La oferta ha sido eliminada exitosamente.', 'success');
                }
            });
        });
    });

    // Editar oferta
    document.querySelectorAll('.editar-oferta').forEach(btn => {
        btn.addEventListener('click', function() {
            const ofertaId = this.getAttribute('data-oferta-id');
            Swal.fire({
                title: 'Editar oferta',
                customClass: {
                    popup: 'swal-nunito',
                    title: 'swal-title-custom'
                },
                showCloseButton: true,
                html:
                    `<form id="editarOfertaForm">
                        <div class="mb-3">
                            <label for="nombre_negocio" class="form-label">Nombre del negocio</label>
                            <input type="text" id="nombre_negocio" class="swal2-input form-control" required>
                        </div>
                        <div class="mb-3">
                            <label for="direccion_negocio" class="form-label">Dirección del negocio</label>
                            <input type="text" id="direccion_negocio" class="swal2-input form-control" required>
                        </div>
                        <div class="mb-3">
                            <label for="descuento" class="form-label">Descuento (ej: -20%, 2x1)</label>
                            <input type="text" id="descuento" class="swal2-input form-control" required>
                        </div>
                        <div class="mb-3">
                            <label for="fecha_vigencia" class="form-label">Fecha de vigencia</label>
                            <input type="date" id="fecha_vigencia" class="swal2-input form-control" required>
                        </div>
                        <div class="mb-3">
                            <label for="descripcion" class="form-label">Descripción</label>
                            <textarea id="descripcion" class="swal2-textarea form-control" required></textarea>
                        </div>
                    </form>`,
                showCancelButton: true,
                confirmButtonText: 'Actualizar',
                cancelButtonText: 'Cancelar',
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('¡Oferta actualizada!', 'La oferta ha sido actualizada exitosamente.', 'success');
                }
            });
        });
    });

    // Ver oferta
    document.querySelectorAll('.ver-oferta').forEach(btn => {
        btn.addEventListener('click', async function() {
            Swal.fire({
                title: 'Oferta',
                html: `
                    <div style="text-align:left">
                        <b>Dirección:</b><br>
                        <b>Descuento:</b><br>
                        <b>Fecha de vigencia:</b><br>
                        <b>Descripción:</b><br><br>
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
                    Swal.fire('¡Oferta aprobada!', 'La oferta ha sido aprobada exitosamente.', 'success');
                } else if (result.isDenied) {
                    Swal.fire('¡Oferta rechazada!', 'La oferta ha sido rechazada.', 'info');
                }
            });
        });
    });
});