import * as React from "react";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { UserContext } from "../layouts";
import Header from "../components/Website/Header";
import { Typography } from "@mui/material";
import { Dimensionscontext } from "../layouts";
import Login from "../components/App/Login";
// import { signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { authentication } from "../components/firebase-config";
const IndexPage = () => {
  const { user, signinwithGoogle, signout } = useContext(UserContext);
  const [height, width, standaloneornot] = useContext(Dimensionscontext);
  return (
    <React.Fragment>
      {standaloneornot ? (
        
        <Login />
      ) : (
        <React.Fragment>
          <Header />
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            impedit blanditiis inventore quasi dolorum omnis ut dicta possimus,
            consequatur exercitationem libero, in unde aliquam ipsam neque! Ad
            vero quod atque ea dicta accusamus aliquam veniam totam nisi in aut
            maiores consectetur id tempora fugiat deleniti maxime minus ullam
            eum autem, voluptatibus similique voluptates laborum ex. At cumque
            molestias, cupiditate saepe laboriosam hic. Iusto corporis porro
            consectetur, ratione excepturi laudantium sit perspiciatis aliquam
            fuga sapiente eveniet dolor totam, quibusdam quaerat! Repellat
            maxime architecto saepe dolorum quos unde ullam ipsum eos, mollitia
            beatae, ipsa minima? Dolorem, praesentium. Unde vitae, incidunt
            optio, consequatur hic quibusdam in sit voluptatum sapiente quae
            eaque? Veritatis ducimus adipisci ex iste id culpa labore veniam
            libero? Dicta quasi provident eligendi repellat reprehenderit
            impedit ut neque quam voluptates blanditiis praesentium odio
            exercitationem obcaecati cum facere culpa doloribus optio,
            voluptatum ducimus at, autem pariatur necessitatibus, sunt nulla!
            Rem nobis quam ratione atque saepe repellat maxime, tempora, quod
            itaque, est sapiente! Assumenda temporibus a sed ea sint cupiditate
            culpa unde maxime libero aut eos eum, recusandae tenetur laborum
            magni impedit aspernatur, eius laudantium eveniet molestias! Totam
            molestias expedita, voluptatum ad blanditiis eligendi nam aliquid
            nihil facilis assumenda laboriosam quae commodi vitae adipisci
            aperiam fugit quia, dolor porro ducimus perferendis repellendus non
            enim. In dolorum perspiciatis aliquam cumque commodi a unde,
            repellendus sed accusantium quam dolore! Officiis reiciendis
            assumenda earum sapiente eos placeat maxime tempore nulla atque,
            officia, eligendi doloremque, enim minima et dignissimos. Sapiente
            numquam culpa harum reprehenderit dignissimos quam delectus id
            voluptatem rerum fuga voluptatum modi, perferendis facere, ab veniam
            natus, deleniti alias ducimus tenetur rem laudantium quaerat non.
            Veniam illum dolores dolore rem aspernatur. Laboriosam alias nam
            vero tempore numquam eum quidem distinctio expedita dolorem animi
            deleniti libero culpa, voluptatum atque quia dicta perferendis enim
            assumenda reprehenderit! Exercitationem ipsam nihil commodi expedita
            tempore. Et magni, quae ab repellendus porro voluptates aut
            blanditiis consequuntur recusandae soluta facere animi iusto
            laudantium in nobis repudiandae doloremque ad ducimus voluptas odit
            ullam, deserunt quasi. Aut, dignissimos ullam asperiores ipsam
            repellendus pariatur, saepe consectetur quis eius repudiandae fuga
            eveniet ab nihil nisi sequi adipisci et minus beatae nulla
            inventore. Repudiandae odit modi deleniti nulla cum hic, quo nam
            vitae. Inventore maiores minus distinctio modi aut, a quia qui rem
            dolor perspiciatis. Aspernatur molestiae delectus ratione harum
            earum id hic, corrupti, laboriosam provident omnis inventore. Fugiat
            nesciunt libero enim natus quam deleniti explicabo architecto
            perspiciatis impedit provident quia, at incidunt, labore quaerat
            tempore quo, magnam excepturi quod ut eos similique accusantium
            aspernatur? Libero, omnis, id nesciunt doloribus ipsum impedit odio
            magnam rerum harum, cupiditate exercitationem soluta similique
            inventore minus ut perspiciatis reprehenderit! Ducimus, provident
            nisi quia blanditiis voluptatum, quaerat consequatur a illo sequi
            enim itaque praesentium distinctio qui aspernatur dolorem quam. Sit
            id, impedit veniam, similique nisi commodi aperiam molestiae optio
            assumenda quisquam reiciendis. Error fugiat aliquam voluptates iste
            aperiam officia in asperiores? Maxime accusamus rerum non pariatur,
            corporis quas eaque temporibus, ab praesentium consequatur dolorum
            dolorem natus enim doloremque consectetur, ipsum eum. Eveniet
            ducimus sequi minima magni maiores, non totam minus nam eligendi
            fugiat doloribus neque obcaecati nemo pariatur labore beatae earum.
            Ipsa voluptatibus nostrum, reprehenderit perferendis eveniet sed
            facilis adipisci, repellendus, harum deleniti sint corporis
            dignissimos ab laudantium culpa ducimus numquam consequuntur laborum
            fugit! Laboriosam, adipisci? Deserunt harum nostrum, dignissimos
            pariatur rerum voluptatum ducimus ad debitis cum perferendis? Sit
            nisi doloribus dolor quas qui nihil officiis, a architecto at eius
            necessitatibus nesciunt nam modi saepe eligendi aperiam consequuntur
            praesentium provident autem iusto voluptates facilis error impedit.
            Cumque perspiciatis quae illum qui tempora asperiores quam deleniti
            ratione. Blanditiis ullam amet veritatis cumque et ipsum corrupti
            ipsam libero, expedita excepturi, magnam facilis illum? Consequuntur
            consequatur, quaerat beatae voluptates sequi explicabo qui? Nesciunt
            fugiat nostrum voluptate amet tenetur repellat quaerat maiores
            debitis officia beatae, nobis itaque illo sint obcaecati non.
            Aliquam repellat mollitia tempore dolor cupiditate explicabo!
            Expedita impedit nemo, obcaecati consectetur quos dicta
            necessitatibus perspiciatis deserunt natus ipsam cupiditate quisquam
            repellendus ea ex? Unde reiciendis maxime quas accusantium omnis
            repellendus id quia beatae maiores, velit sed deleniti, nesciunt ex.
            Itaque soluta molestias reiciendis ducimus quisquam obcaecati
            eligendi ex adipisci? Facilis qui corporis veritatis excepturi,
            dolorem reprehenderit rem at accusamus aperiam hic ipsum? Aliquam
            aspernatur nisi dolor nihil temporibus quaerat in asperiores
            repellendus alias iste consectetur laboriosam natus, ratione enim
            eius dolorum dolorem et voluptate ducimus repellat excepturi modi
            consequuntur neque? Recusandae repellendus, rem tenetur expedita
            voluptatem consectetur sapiente aliquid sequi ea libero quasi nihil
            natus nesciunt accusamus aliquam beatae! Ducimus qui aut, quam
            laborum asperiores voluptatibus sunt, reprehenderit, dolore hic
            maxime repellat quos illo natus aperiam voluptas nulla cumque
            corporis? Adipisci modi id eum quidem pariatur laboriosam iste illo
            aut ab temporibus sit ea tempore, nulla ullam quibusdam impedit
            velit minima. Repellendus mollitia, animi similique sunt enim
            asperiores reprehenderit ipsa hic exercitationem laborum, magnam
            accusamus numquam sequi ad consequuntur totam excepturi unde autem
            amet, dolorum praesentium! Illum nesciunt, facilis similique, optio
            beatae quis sit dolores molestiae adipisci, fugit rem at ad
            recusandae enim quisquam officiis error! Eligendi, vel iure vero
            illum nostrum quasi dolorem quo ut unde ipsum veritatis dolores ipsa
            voluptatum, tempora libero facilis nihil! Mollitia eveniet aut,
            architecto rerum pariatur dolorum eum hic et? Praesentium ipsam
            laboriosam nihil explicabo repellendus veniam voluptate qui fugit
            beatae blanditiis esse rem amet, asperiores corrupti, architecto
            necessitatibus laudantium nisi quidem quasi aperiam reprehenderit
            molestiae. Illum, velit. Architecto, nihil. Illo nesciunt ea at
            dolore accusamus! Quam quibusdam libero doloribus magni voluptatem
            veritatis, fugit eaque ab qui eligendi molestiae fugiat voluptate
            aspernatur, vero vel sit modi in ea. Laboriosam eveniet quod vitae
            doloremque totam aspernatur quo pariatur quidem, eius, voluptatum
            ad. Sequi, quidem. Nostrum, aspernatur veritatis. Pariatur labore
            vitae fuga optio, odio atque assumenda doloremque, temporibus
            consequuntur modi nisi eius omnis, eos ex doloribus culpa?
            Architecto ea reprehenderit iure, dolore vitae accusamus fugiat
            veritatis cupiditate laboriosam voluptates beatae magni, repellendus
            rem minima obcaecati repudiandae perferendis ipsam officia.
            Distinctio dignissimos odit quis maxime veritatis velit, aut eum
            magni aliquid, rerum impedit iure cumque architecto ipsa, ratione
            nobis veniam dolores aliquam!
          </Typography>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default IndexPage;
