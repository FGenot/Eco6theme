$(document).ready(function () {
	$(document).on('click', '.show_resources', function(){
		$('.resources').slideDown();
		$(this).removeClass('show_resources').addClass('hide_resources').html('expand_less');
	})

	$(document).on('click', '.hide_resources', function(){
		$('.resources').slideUp();
		$(this).removeClass('hide_resources').addClass('show_resources').html('expand_more');
	})

	$(document).on('click', '.show_ideas', function(){
		$('.ideas').slideDown();
		$(this).removeClass('show_ideas').addClass('hide_ideas').html('expand_less');
	})

	$(document).on('click', '.hide_ideas', function(){
		$('.ideas').slideUp();
		$(this).removeClass('hide_ideas').addClass('show_ideas').html('expand_more');
	})

	$(document).on('click', '.show_chat', function(){
		$('.chat').slideDown();
		$(this).removeClass('show_chat').addClass('hide_chat').html('expand_less');
	})

	$(document).on('click', '.hide_chat', function(){
		$('.chat').slideUp();
		$(this).removeClass('hide_chat').addClass('show_chat').html('expand_more');
	})

	function make_modal_add_resource(resource_name, img) {
		var modal_add_resource = '<div class="modal-content">';
		modal_add_resource += '<h5 class="">Ajouter '+ resource_name +' <i id="closeModalImage" class="material-icons right modal-action modal-close" style="color: #404852;">close</i></h5>';
		modal_add_resource += '<div class="row" style="display: flex; align-items: center; justify-content: center;">';
		modal_add_resource += '<img src="'+ img +'" style="height: 100px;width: 100px;"/>';
		modal_add_resource += '</div>';
		modal_add_resource += '<p>Vous avez une idée d\'amélioration pour la ville en ajoutant un.e <b>'+ resource_name +'</b>, veuillez remplir ce formulaire pour continuer.</p>';
		modal_add_resource += '<div class="input-field col s12">';
		modal_add_resource += '<textarea id="textarea1" class="materialize-textarea"></textarea>';
		modal_add_resource += '<label for="textarea1" style="left: 0;">Développez votre idée</label>';
		modal_add_resource += '</div>';
		modal_add_resource += '<div class="row">';
		modal_add_resource += '<span class="bold" style="font-size: 16px;">Contraintes liées à cette ressource :</span><br>';
		modal_add_resource += '<div>';
		modal_add_resource += '<span>A remplir, WTF§§!!</span>';
		modal_add_resource += '</div>';
		modal_add_resource += '</div>';
		modal_add_resource += '<div id="section_send" style="" class="section_send">';
		modal_add_resource += '<button style="margin-right: 5px;" class="btn red darken-2 delete_idea"  name="delete_idea" id="delete_idea">Annuler</button>';
		modal_add_resource += '<button class="btn green" name="sendIdea" id="send_idea">Envoyer</button>';
		modal_add_resource += '</div>';
		modal_add_resource += '<div id="uploadingStatus2" class=""></div>';
		modal_add_resource += '</div>';
		$('#modal_add_resource').html(modal_add_resource);
	}

	$(document).on('click', '.resource', function () {
		let resource = $(this).data('res');
		let image = $(this).attr('src');
		make_modal_add_resource(resource, image);
	})

})