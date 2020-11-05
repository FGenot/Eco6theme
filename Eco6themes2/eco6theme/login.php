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
      </div>
    </nav>
    <section class="container" style="margin-top: 20px;">
        <div class="row">
            <div class="col s12">
                <div class="card" style="margin-bottom: 0;">
                    <div class="card-content" style="padding: 12px !important;">
                        <h6 style="display: flex; justify-content: center; align-items: center;">Connexion</h6>   
                    </div> 
                    <!-- zone de connexion -->
                    
                   
                    <div style="padding: 12px !important;">
                    <form action="verification.php" method="POST" style="padding: 12px !important;">
                        
                        <label><b>Email</b></label>
                        <input type="text" placeholder="Entrer votre email" name="email" required>

                        <label><b>Mot de passe</b></label>
                        <input type="password" placeholder="Entrer votre mot de passe" name="password" required>

                        <input type="submit" id='submit' value='Connexion' >
                        <?php
                        if(isset($_GET['erreur'])){
                            $err = $_GET['erreur'];
                            if($err==1 || $err==2)
                                echo "<p style='color:red'>Utilisateur ou mot de passe incorrect</p>";
                        }
                        ?>
                    </form>
                    <a href="http://localhost/inscription.php" > Pas de compte ? Inscrivez vous</a>                    
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>