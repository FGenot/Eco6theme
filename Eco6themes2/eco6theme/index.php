<!DOCTYPE html>
<html lang="fr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>df</title>
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link rel="stylesheet" href="css/main.css">
    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  </head>
  <body>
    <nav class="green">
      <div class="container nav-wrapper">
        <a href="#" class="brand-logo">Eco6Theme</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="">Theme 1</a></li>
          <li><a href="">Theme 2</a></li>
          <li><a href="">Theme 3</a></li>
          <li><a href="">Theme 4</a></li>
          <li><a href="">Theme 5</a></li>
          <li><a href="">Theme 6</a></li>
        </ul>
      </div>
    </nav>

    <div id="modal_add_resource" class="modal"></div>

    <section class="container" style="margin-top: 20px;">
      <div class="row">
          <div class="col l8 card" style="height: 550px; background-image: url('./img/environnement1.gif'); background-size: cover;padding: 0;">
              <div style="background-color: rgba(0,0,0,.6); height: inherit; width: 100%; padding: 0 10px;display: flex;/*! align-items: end; */ justify-content: space-between;flex-direction: column;">
                  <div class="row white" style="margin-bottom: 0;padding: 10px;">
                      <div class="col">
                          <div style="display: flex; align-items: center;">
                              <div class="col" style="padding-right: 0;"><span style="display: flex; align-items: center;"><i class="material-icons" style="margin-right: 5px;">people</i> Population</span></div>
                              <div class="col"><span class="green-text" style="font-weight: bold;">5000</span></div>
                          </div>
                      </div>
                      <div class="col">
                          <div style="display: flex; align-items: center;">
                              <div class="col" style="padding-right: 0;"><span style="display: flex; align-items: center;"><i class="material-icons orange-text" style="margin-right: 5px;">warning</i> Pollution</span></div>
                          </div>
                      </div>
                  </div>
                  <div class="row" style="display: flex; justify-content: center; align-items: center;">
                        <div class="col">
                            <span class="white-text bold" style="font-size: 35px;">Ressources présentes dans la ville</span>
                        </div>
                  </div>
                  <div class="row" style="margin-bottom: 0; display: flex; flex-direction: row; overflow-x: scroll;">
                      <div class="col">
                          <img class="pointer" src="img/building2.png" style="height: 200px; width: 100px;">
                      </div>
                      <div class="col">
                          <img class="pointer" src="img/road2.png" style="height: 200px; width: 100px;">
                      </div>
                      <div class="col">
                          <img class="pointer" src="img/building2.png" style="height: 200px; width: 100px;">
                      </div>
                      <div class="col">
                          <img class="pointer" src="img/cherry-tree2.png" style="height: 200px; width: 100px;">
                      </div>
                      <div class="col">
                          <img class="pointer" src="img/road2.png" style="height: 200px; width: 100px;">
                      </div>
                      <div class="col">
                          <img class="pointer" src="img/cherry-tree2.png" style="height: 200px; width: 100px;">
                      </div>
                      <div class="col">
                          <img class="pointer" src="img/solar-house2.png" style="height: 200px; width: 100px;">
                      </div>
                      <div class="col">
                          <img class="pointer" src="img/road2.png" style="height: 200px; width: 100px;">
                      </div>
                      <div class="col">
                          <img class="pointer" src="img/wind-power2.png" style="height: 200px; width: 100px;">
                      </div>
                      <div class="col">
                          <img class="pointer" src="img/road2.png" style="height: 200px; width: 100px;">
                      </div>
                  </div>
              </div>
          </div>
          <div class="col l4">
              <div class="col s12">
                  <div class="card" style="margin-bottom: 0;">
                      <div class="card-content" style="padding: 12px !important;">
                          <h6 class="" style="display: flex; align-items: center; margin: 0;">Ressources<i class="material-icons pointer show_resources green-text" style="font-size: 25px;">expand_more</i> </h6>
                      </div>
                      <div class="divider"></div>
                      <div class="card-content" style="padding: 12px !important;">
                          <div class="row no_margin_bottom resources" style="height: 100%; display: none;">
                              <div class="col">
                                  <img class="resource pointer modal-trigger" data-res="tree" data-target="modal_add_resource" src="img/cherry-tree2.png" style="height: 60px; width: 60px;">
                              </div>
                              <div class="col">
                                  <img class="resource pointer modal-trigger" data-res="building" data-target="modal_add_resource" src="img/building2.png" style="height: 60px; width: 60px;">
                              </div>
                              <div class="col">
                                  <img class="resource pointer modal-trigger" data-res="road" data-target="modal_add_resource" src="img/road2.png" style="height: 60px; width: 60px;">
                              </div>
                              <div class="col">
                                  <img class="resource pointer modal-trigger" data-res="solar_house" data-target="modal_add_resource" src="img/solar-house2.png" style="height: 60px; width: 60px;">
                              </div>
                              <div class="col">
                                  <img class="resource pointer modal-trigger" data-res="wind_power" data-target="modal_add_resource" src="img/wind-power2.png" style="height: 60px; width: 60px;">
                              </div>
                              <div class="col">
                                  <img class="resource pointer modal-trigger" data-res="bike_path" data-target="modal_add_resource" src="img/bike-path.png" style="height: 60px; width: 60px;">
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col s12">
                  <div class="card" style="margin-bottom: 0;">
                      <div class="card-content" style="padding: 12px !important;">
                          <h6 class="" style="display: flex; align-items: center; margin: 0;">Boite à idées<i class="material-icons pointer show_ideas green-text" style="font-size: 25px;">expand_more</i> </h6>
                      </div>
                      <div class="divider"></div>
                      <div class="card-content " style="padding: 12px !important;">
                          <div class="row no_margin_bottom ideas" style="height: 100%; display: none;">
                              <div class="row no_margin_bottom" style="display: flex;align-items: center; padding: 0 12px;">
                                  <div class="col">
                                      <img src="img/cherry-tree2.png" class="circle z-depth-1" style="height: 40px; width: 40px; border: 2px solid #fff;">
                                  </div>
                                  <div class="col s10" style="margin-left: 0;">
                                      <span class="bold">Planter un arbre</span><br>
                                      <span class="second">03 Nov 2020</span>
                                  </div>
                                  <div class="col right">
                                      <span class="badge green white-text" style="font-size: 9px; padding: 0;">Fait</span></a>
                                  </div>
                              </div>
                              <div class="divider" style="margin: 10px 0;"></div>
                              <div class="row no_margin_bottom" style="display: flex;align-items: center; padding: 0 12px;">
                                  <div class="col">
                                      <img src="img/solar-house2.png" class="circle z-depth-1" style="height: 40px; width: 40px; border: 2px solid #fff;">
                                  </div>
                                  <div class="col s10" style="margin-left: 0;">
                                      <span class="bold">Installations de panneaux solaire</span><br>
                                      <span class="second">03 Nov 2020</span>
                                  </div>
                                  <div class="col right">
                                      <span class="badge grey white-text" style="font-size: 9px; padding: 0;">En cours</span></a>
                                  </div>
                              </div>
                              <div class="divider" style="margin: 10px 0;"></div>
                              <div class="row no_margin_bottom" style="display: flex;align-items: center; padding: 0 12px;">
                                  <div class="col">
                                      <img src="img/bike-path.png" class="circle z-depth-1" style="height: 40px; width: 40px; border: 2px solid #fff;">
                                  </div>
                                  <div class="col s10" style="margin-left: 0;">
                                      <span class="bold">Pistes cyclables</span><br>
                                      <span class="second">05 Nov 2020</span>
                                  </div>
                                  <div class="col right">
                                      <span class="badge red white-text" style="font-size: 9px; padding: 0;">Annulé</span></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col s12">
                  <div class="card" style="margin-bottom: 0; display: flex; flex-direction: column;">
                      <div class="card-reveal">
                          <span class="card-title grey-text text-darken-4">Ville de demain | projet immobilier<i class="material-icons right">close</i></span>
                          <p>Here is some more information about this product that is only revealed once clicked on.</p>
                      </div>
                      <div class="card-content" style="padding: 12px !important;">
                          <div class="col pointer activator">
                              <img src="img/environnement1.gif" class="circle z-depth-1 activator" style="height: 40px; width: 40px; border: 2px solid #fff;">
                          </div>
                          <div class="col l8 pointer activator">
                              <span class="activator">Ville de demain | projet immobilier</span>
                          </div>
                          <div class="col">
                              <i class="material-icons pointer hide_chat green-text" style="font-size: 25px;">expand_less</i>
                          </div>
                      </div>
                      <div class="divider"></div>
                      <div class="card-content " style="padding: 0 12px !important;">
                          <div class="row no_margin_bottom chat" style="height: 100%; display: block; padding: 0 12px;">
                              <div class="row no_margin_bottom" style="height: 300px;">

                              </div>
                              <div class="row no_margin_bottom grey lighten-4" style="padding: 10px 0;display: flex;justify-content: space-between;">
                                  <div class="col" style="padding-right: 0;">
                                      <a class="waves-effect waves-light btn-small black-text" style="background-color: #eceff1;"><i class="material-icons">attach_file</i></a>
                                  </div>
                                  <div class="col">
                                      <input class="textarea_send no_margin_bottom" placeholder="Ecrivez quelque chose" style="padding: 0 5px; height: 36px; margin-bottom: 0;">
                                  </div>
                                  <div class="col">
                                      <a class="waves-effect waves-light btn-small green"><i class="material-icons">send</i></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <!-- Compiled and minified JavaScript -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script src="js/init.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>
