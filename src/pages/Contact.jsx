import React, { useEffect } from 'react';

const Contact = () => {

	useEffect(() => {
		window.scrollTo({ top: true });
	}, []);
	return (
		<>
			<section className='page-section bajarsection' id='contact'>
				<div className='container mt-5'>
					<div className='text-center'>
						<h2 className='section-heading text-uppercase'>Contactanos</h2>
						<h3 className='section-subheading text-muted'>
							Pane e Pasta Colombiani
						</h3>
					</div>
					<div>
						<form
							id='contactForm'
							action='https://formspree.io/f/xbjqbgko'
							method='POST'
						>
							<input type='hidden' name='_language' value='es' />
							<input
								type='hidden'
								name='_subject'
								value='RestaurantApp - Contact Form'
							/>
							<div className='row align-items-stretch mb-5'>
								<div className='col-md-6'>
									<div className='form-group'>
										<input
											className='form-control'
											type='text'
											name='Nombre'
											placeholder='Nombre'
											style={{ padding: '10px', width: '100%' }}
											required
											pattern="[a-z A-Z]{3,45}"
										/>
									</div>
									<div className='form-group'>
										<input
											className='form-control'
											type='email'
											name='Email'
											placeholder='Email'
											style={{ padding: '10px', width: '100%' }}
											required
											minlength="10"
											maxlength="125"
										/>
									</div>
									<div class="form-group">
										<input
											name="Telefono"
											type="tel"
											class="form-control"
											id="floatingInput"
											placeholder="Telefono"
											required
											pattern="[0-9]{7,10}"
										/>
									</div>
									<div class="form-group">
										<select
											className='form-select'
											aria-label='Default select example'
											name='reservaciones'
											style={{
												padding: '10px',
												width: '100%',
												marginBottom: '10px',
											}}
											required
										>
											<option value='ninguno'>RESERVAS</option>
											<option value='Cena de amigos'>Cena de amigos</option>
											<option value='Declaracioes'>Declaracioes</option>
											<option value='Despedida'>Despedida</option>
											<option value='Fiesta infantil'>Fiesta infantil</option>
											<option value='Cumpleaños'>Cumpleaños</option>
											<option value='Fiesta de grados'>Fiesta de grados</option>
										</select>
									</div>
									<div class="form-group">
										<input
											name="asistentes"
											type="text"
											class="form-control"
											id="floatingInput"
											required
											pattern="[0-9]*"
											placeholder="Numero de asistentes"
										/>
									</div>

									<div class="form-group">
										<input
											name="fecha"
											type="datetime-local"
											class="form-control"
											id="floatingInput"
											required
											placeholder="Fecha y hora"
										/>
									</div>
									<div className='form-group'>
										<textarea
											className='form-control'
											type='text'
											name='Observaciones'
											placeholder='Observaciones'
											minlength='0'
											maxlength='250'
											style={{ padding: '10px', width: '100%' }}
										></textarea>
									</div>
									<div class='form-check'>
										<input
											class='form-check-input'
											type='checkbox'
											value=''
											id='flexCheckDefault'
											required
										/>
										<label
											class='text-light form-check-label'
											for='flexCheckDefault'
										>
											Al hacer clic en "Enviar", aceptas nuestras Condiciones,
											la Política de datos y la Política de cookies.Es posible
											que te enviemos notificaciones por SMS, que puedes
											desactivar cuando quieras.
										</label>
									</div>
									<button
										type='submit'
										className='btn btn-primary'
										style={{ padding: '10px', width: '100%' }}
									>
										Enviar Correo
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
