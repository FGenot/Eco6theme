<?php
    session_start();

    // S'il y a une session alors on ne retourne plus sur cette page
    if (isset($_SESSION['id'])){
        header('Location: index.php'); 
        exit;
    }

    // Si la variable "$_Post" contient des informations alors on les traitres
    if(!empty($_POST)){
        $db_username = 'root';
        $db_password = '';
        $db_name     = 'eco6';
        $db_host     = 'localhost';
        $db = mysqli_connect($db_host, $db_username, $db_password,$db_name)
            or die('could not connect to database');
        extract($_POST);
        $valid = true;

        // On se place sur le bon formulaire gr�ce au "name" de la balise "input"
        if (isset($_POST['inscription'])){

            $pseudo = mysqli_real_escape_string(htmlentities(trim($pseudo))(;
            $nom  = mysqli_real_escape_string(htmlentities(trim($nom))); // On r�cup�re le nom
            $prenom = mysqli_real_escape_string(htmlentities(trim($prenom))); // on r�cup�re le pr�nom
            $email = mysqli_real_escape_string(htmlentities(strtolower(trim($email)))); // On r�cup�re le mail
            $motDePasse = trim($motDePasse); // On r�cup�re le mot de passe 
            $confmdp = trim($confmdp); //  On r�cup�re la confirmation du mot de passe

            if(empty($pseudo)){
                $valid = false;
                $er_pseudo = ("Le pseudo ne peut pas �tre vide");
            }else{
                // On v�rifit que le mail est disponible
                $req_pseudo = $DB->query("SELECT pseudo FROM personne WHERE pseudo = ?",
                    array($pseudo));

                $req_pseudo = $req_pseudo->fetch();

                if ($req_pseudo['pseudo'] <> ""){
                    $valid = false;
                    $er_pseudo = "Ce pseudo existe déja";
                }
            } 

            //  V�rification du nom
            if(empty($nom)){
                $valid = false;
                $er_nom = ("Le nom d' utilisateur ne peut pas �tre vide");
            }       

            //  V�rification du pr�nom
            if(empty($prenom)){
                $valid = false;
                $er_prenom = ("Le prenom d' utilisateur ne peut pas �tre vide");
            }       

            // V�rification du mail
            if(empty($email)){
                $valid = false;
                $er_email = "Le mail ne peut pas �tre vide";

                // On v�rifit que le mail est dans le bon format
            }elseif(!preg_match("/^[a-z0-9\-_.]+@[a-z]+\.[a-z]{2,3}$/i", $email)){
                $valid = false;
                $er_email = "Le mail n'est pas valide";

            }else{
                // On v�rifit que le mail est disponible
                $req_email = $DB->query("SELECT email FROM personne WHERE email = ?",
                    array($email));

                $req_email = $req_email->fetch();

                if ($req_email['mail'] <> ""){
                    $valid = false;
                    $er_email = "Ce mail existe d�j�";
                }
            }

            // V�rification du mot de passe
            if(empty($motDePasse)) {
                $valid = false;
                $er_mdp = "Le mot de passe ne peut pas �tre vide";

            }elseif($mdp != $confmdp){
                $valid = false;
                $er_mdp = "La confirmation du mot de passe ne correspond pas";
            }

            // Si toutes les conditions sont remplies alors on fait le traitement
            if($valid){

                $motDePasse = crypt($motDePasse, "$6$rounds=5000$eco6theme$");


                // On insert nos donn�es dans la table utilisateur
                $DB->insert("INSERT INTO utilisateur (pseudo, nom, prenom, mail, motDePasse) VALUES 
                    (?, ?, ?, ?, ?)", 
                    array($pseudo, $nom, $prenom, $email, $motDePasse));

                header('Location: index.php');
                exit;
            }
        }
    }
?>

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
        <a href="Connexion" class="right hide-on-med-and-down">
      </div>
    </nav>
    <section class="container" style="margin-top: 20px;">
        <div class="row">
            <div class="col s12">
                <div class="card" style="margin-bottom: 0;">
                    <div class="card-content" style="padding: 12px !important;">
                        <h6 style="display: flex; justify-content: center; align-items: center;">Inscription</h6>   
                    </div> 
                    <div style="padding: 12px !important;">
                        <form method="post">
                            <?php
                                // S'il y a une erreur sur le nom alors on affiche
                                if (isset($er_pseudo)){
                                ?>
                                    <div><?= $er_pseudo ?></div>
                                <?php   
                                }
                            ?>
                            <input type="text" placeholder="Votre pseudo" name="pseudo" value="<?php if(isset($pseudo)){ echo $pseudo; }?>" required>   
                            <?php
                                // S'il y a une erreur sur le nom alors on affiche
                                if (isset($er_nom)){
                                ?>
                                    <div><?= $er_nom ?></div>
                                <?php   
                                }
                            ?>
                            <input type="text" placeholder="Votre nom" name="nom" value="<?php if(isset($nom)){ echo $nom; }?>" required>   

                            <?php
                                if (isset($er_prenom)){
                                ?>
                                    <div><?= $er_prenom ?></div>
                                <?php   
                                }
                            ?>
                            <input type="text" placeholder="Votre prénom" name="prenom" value="<?php if(isset($prenom)){ echo $prenom; }?>" required>   

                            <?php
                                if (isset($er_email)){
                                ?>
                                    <div><?= $er_email ?></div>
                                <?php   
                                }
                            ?>
                            <input type="email" placeholder="Adresse mail" name="mail" value="<?php if(isset($email)){ echo $email; }?>" required>

                            <?php
                                if (isset($er_mdp)){
                                ?>
                                    <div><?= $er_mdp ?></div>
                                <?php   
                                }
                            ?>
                            <input type="password" placeholder="Mot de passe" name="mdp" value="<?php if(isset($motDePasse)){ echo $motDePasse; }?>" required>
                            <input type="password" placeholder="Confirmer le mot de passe" name="confmdp" required>
                            <button type="submit" name="inscription">Envoyer</button>
                        </form>                  
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>