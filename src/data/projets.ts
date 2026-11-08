// src/data/projets.ts
// Remplace les collections PocketBase "projet" + "detail_projet".

export interface Projet {
  slug: string;              // utilisé dans l'URL : /projets/<slug>
  nom: string;               // nom_projet (carte)
  titre: string;             // nom_detail (page détail)
  photo: string;             // photo_projet (nom de fichier dans src/assets)
  filtres: string[];         // filtre_projet
  competencesCarte: string[]; // competence_projet
  competences: string[];     // competence_detail
  extrait: string;
  explication: string[];     // un élément = un paragraphe
  voirSite?: string;
  embed?: string;            // URL d'un iframe (ex. Spotify), affiché dans la colonne de gauche
  objectifs: string[];
  resultat: string;
  galerie: string[];
  similaires: string[];      // slugs
  rapportIa?: string;
}

export const projets: Projet[] = [
  // ───────────────────────── NEXTWEAR ─────────────────────────
  {
    slug: 'nextwear',
    nom: 'Nextwear',
    titre: 'Nexwear',
    photo: 'gallerie_NW_1.png',
    filtres: ['Développement web'],
    competencesCarte: ['web design', 'développement', 'branding', 'direction artistique', 'mock-up'],
    competences: ['Développement web', 'UI/UX', 'Web design', 'Design graphique', 'Branding', 'Direction artistique'],
    extrait:
      'Conception d’un site web mobile-first explorant l’évolution de la mode à travers le prisme du futur et des technologies émergentes, mêlant culture, design et innovation.',
    explication: [
      `NextWear est un projet de site web conçu selon une approche mobile-first, visant à explorer la relation entre la mode, la technologie et les visions du futur. Le site s’inscrit dans le thème “Préhistoire du Futur”, qui invite à observer notre époque comme si elle était étudiée par les générations futures.`,
      `À travers différentes sections éditoriales, la plateforme propose un ensemble de contenus culturels — films, livres, musique et objets — qui illustrent comment les innovations actuelles pourraient influencer l’évolution de la mode et de notre rapport au vêtement. L’objectif est de créer une expérience immersive qui mêle culture visuelle, réflexion et design numérique.`,
      `Le site met particulièrement en avant les thématiques liées au techwear, aux textiles intelligents et à la mode numérique, qui représentent aujourd’hui des pistes majeures pour l’avenir de l’industrie vestimentaire. Ces innovations imaginent des vêtements capables de réagir à leur environnement, de collecter des données ou encore de s’adapter aux conditions météorologiques.`,
      `Le projet a été conçu en tenant compte des usages actuels du web, où une grande partie du trafic provient désormais des smartphones. L’interface est donc pensée en priorité pour les écrans mobiles, garantissant une navigation fluide et accessible.`,
      `Au-delà d’un simple site d’information, NextWear propose une réflexion sur un futur possible de la mode, où les vêtements pourraient devenir virtuels, interactifs ou entièrement numériques, notamment dans des univers immersifs comme le métaverse.`,
    ],
    objectifs: [
      'Concevoir un site web mobile-first adapté aux usages actuels du web',
      'Explorer la relation entre mode, technologie et innovation',
      'Créer une expérience éditoriale immersive autour de la “mode du futur”',
      'Mettre en avant les concepts de techwear, mode numérique et innovation textile',
    ],
    resultat:
      'Le projet aboutit à la création d’un site web conceptuel combinant design éditorial, réflexion prospective et expérience mobile. NextWear propose une vision créative de l’évolution de la mode, tout en sensibilisant aux transformations technologiques et culturelles qui pourraient façonner les vêtements de demain.',
    galerie: ['gallerie_NW_1.png', 'gallerie_NW_2.png', 'gallerie_NW_3.png', 'gallerie_NW_4.png', 'gallerie_NW_5.png'],
    similaires: ['la-quete', 'yumly'],
    rapportIa:
      'Le code a été construit en m’aidant de l’IA lorsque mes compétences en développement web étaient moins solides.',
  },

  // ───────────────────────── LA QUÊTE ─────────────────────────
  {
    slug: 'la-quete',
    nom: 'La quête',
    titre: 'La quête',
    photo: 'gallerie_LQ_1.png',
    filtres: ['Développement web'],
    competencesCarte: ['UI/UX', 'développement', 'mock-up', 'web design', 'branding'],
    competences: ['Développement web', 'UI/UX', 'Web design', 'Design graphique', 'Branding', 'Projet collaboratif'],
    extrait:
      'Conception et développement d’un jeu narratif inspiré de l’univers pirate, réalisé en équipe. Le projet combine storytelling, design visuel et développement web pour créer une aventure interactive en plusieurs niveaux.',
    explication: [
      `La Quête des Trois Clés est un jeu narratif réalisé en groupe, combinant développement web et conception d’univers. L’objectif du projet était de créer une expérience interactive complète, incluant le gameplay, les personnages, l’identité visuelle et l’univers narratif du jeu.`,
      `L’histoire suit Elio, un jeune pirate ayant grandi à Port Royal et n’ayant jamais connu sa famille. Son seul héritage est Ari, un perroquet mystérieux qui répète une phrase énigmatique : « Trois clés ouvrent la fortune… le vent, la terre et les abysses. »`,
      `En explorant une ancienne cabine abandonnée, Elio découvre une carte endommagée portant les mêmes symboles que ceux évoqués par le perroquet. Il comprend alors que la légende du Trésor des Trois Clés pourrait être réelle. Déterminé à terminer la quête que son père aurait commencée autrefois, il répare un vieux navire et part à l’aventure.`,
      `Le jeu se structure autour d’une progression en trois niveaux, chacun correspondant à un environnement et à une épreuve différente. Chaque niveau permet au joueur d’obtenir une clé symbolisant une valeur essentielle du pirate.`,
      `Le premier niveau, La Mer des Lames, plonge le joueur dans une bataille navale vue du dessus. Il doit diriger son navire, affronter des bateaux ennemis et survivre aux éléments comme les vagues ou les tempêtes. Cette première épreuve met en avant la stratégie et la maîtrise du combat en mer. En remportant la bataille, le joueur obtient la Clé du Vent, symbole de force et de domination des océans.`,
      `Le deuxième niveau transporte le joueur dans La Jungle Sauvage, dans une vue de côté. Après avoir accosté sur une île mystérieuse, il doit traverser un environnement dense rempli d’obstacles : rondins, lianes, plantes carnivores ou ruines anciennes. Ce niveau met davantage l’accent sur la vitesse, la précision et l’agilité du joueur. À la fin de ce parcours, Elio obtient la Clé de la Terre, représentant le courage et la persévérance.`,
      `Le troisième et dernier niveau se déroule dans Le Lagon des Sirènes, un environnement plus mystérieux et contemplatif. Le joueur explore ce lieu à la recherche d’objets liés à la sirène qui garde la dernière clé. Ce niveau introduit une dimension plus calme, basée sur l’exploration et la résolution d’énigmes. Une fois les objets réunis, la sirène remet au joueur la Clé des Abysses, dernière étape avant l’ouverture du coffre légendaire.`,
      `Le jeu a été développé en HTML, CSS et JavaScript, et l’ensemble des éléments visuels a été conçu par l’équipe : personnages, animations, interface, univers graphique et éléments de communication autour du jeu.`,
    ],
    voirSite: 'https://lison33.582helvetica.com/La-Quete/',
    objectifs: [
      'Créer un jeu interactif complet avec une narration originale',
      'Concevoir un univers visuel cohérent inspiré de l’imaginaire pirate',
      'Développer un gameplay progressif à travers plusieurs niveaux',
      'Expérimenter le développement de jeu en HTML, CSS et JavaScript',
      'Imaginer le branding et la communication autour du jeu',
    ],
    resultat:
      'Le projet aboutit à un jeu narratif interactif combinant exploration, action et réflexion. Grâce à un univers graphique cohérent et une progression structurée en plusieurs niveaux, La Quête des Trois Clés propose une expérience ludique où chaque étape rapproche le joueur de l’objectif final : ouvrir le coffre du trésor et accomplir la quête laissée par le père d’Elio.',
    galerie: ['gallerie_LQ_1.png', 'gallerie_LQ_2.png', 'gallerie_LQ_3.png', 'gallerie_LQ_4.png', 'gallerie_LQ_5.png'],
    similaires: ['yumly', 'nextwear', 'ocean-autopsy'],
    rapportIa: 'Nous avons utilisé l’IA lors de ce projet pour compléter nos possibles lacunes en JavaScript.',
  },

  // ───────────────────────── YUMLY ─────────────────────────
  {
    slug: 'yumly',
    nom: 'Yumly',
    titre: 'Yumly',
    photo: 'gallerie_YUM_1.png',
    filtres: ['Développement web'],
    competencesCarte: ['développement', 'web design', 'branding', 'UI/UX', 'design graphique'],
    competences: ['Développement web', 'UI/UX', 'Web design', 'Branding', 'Projet collaboratif'],
    extrait:
      'Refonte du concept Mercantina en une expérience Web dynamique qui donne vie à un site de référencement de produits ethniques.',
    explication: [
      `S’inspirer de la cuisine du monde devrait être simple. Pourtant, trouver des ingrédients authentiques venus d’ailleurs reste souvent complexe, entre offres dispersées et informations peu claires.`,
      `Yumly est né pour répondre à ce besoin. Pensée comme une plateforme centralisée, l’expérience simplifie l’accès aux produits internationaux et facilite la découverte de nouvelles saveurs. Avec des animations, du contenu dynamique, des recommandations de recettes à partir des ingrédients du site et bien plus encore.`,
      `À travers une interface claire et intuitive, le projet met l’accent sur l’expérience utilisateur, la lisibilité des contenus et la valorisation des produits. Yumly se positionne comme un pont entre les cultures, transformant la gastronomie en une invitation au voyage.`,
    ],
    voirSite: 'https://yumly.leo-baudry.fr',
    objectifs: [
      'Centraliser l’accès aux produits culinaires du monde',
      'Simplifier la recherche et la découverte d’ingrédients internationaux',
      'Proposer une expérience claire, fluide et accessible',
      'Valoriser la diversité culturelle à travers le design et le contenu',
    ],
    resultat:
      'Yumly propose une plateforme pensée comme un outil d’exploration culinaire, combinant utilité et inspiration. L’expérience met en avant la richesse des cultures gastronomiques tout en répondant à un besoin concret : rendre les saveurs du monde plus faciles à trouver et à utiliser au quotidien.',
    galerie: ['gallerie_YUM_1.png', 'gallerie_YUM_2.png', 'gallerie_YUM_3.webp', 'gallerie_YUM_4.png', 'gallerie_YUM_5.png'],
    similaires: ['la-quete', 'nextwear', 'modulo'],
    rapportIa:
      'Pour ce projet collaboratif, nous nous sommes aidés de l’intelligence artificielle pour compléter nos compétences en développement web ainsi que pour des contenus génériques.',
  },

  // ───────────────────────── LÀ-BAS OÙ TOUT S'EFFACE ─────────────────────────
  {
    slug: 'la-bas-ou-tout-s-efface',
    nom: 'Là-bas où tout s’efface',
    titre: 'Là-bas où tout s’efface',
    photo: 'gallerie_LOTS_1.png',
    filtres: ['Direction Artistique', 'Photographie'],
    competencesCarte: ['direction artistique', 'montage', 'photographie'],
    competences: ['Premiere pro', 'Projet collaboratif', 'Direction artistique', 'Photographie'],
    extrait:
      'Direction artistique et projet photographique narratif explorant le passage de l’enfance à l’âge adulte à travers une série de photographies mises en scène et un diaporama vidéo accompagné d’une narration.',
    explication: [
      `Là-bas, où tout s’efface est un projet d’écriture multimédia réalisé à deux, mêlant photographie, narration et design sonore pour créer un court récit visuel.`,
      `Le projet explore un moment de transition : celui du passage discret de l’enfance à l’âge adulte. À travers une série de photographies scénarisées et un montage vidéo accompagné d’une voix off, l’histoire suit une jeune femme replongeant dans un lieu situé à la frontière entre souvenir et imaginaire.`,
      `Inspiré par des notions comme la liminalité (l’état d’être entre deux mondes) ou encore le concept gallois Hiraeth, évoquant la nostalgie d’un lieu qui n’existe peut-être plus, le projet construit une atmosphère douce et mélancolique. Les images, les silences et les ambiances sonores participent à créer une narration suggérée plutôt que directement montrée.`,
      `Le travail photographique s’accompagne d’une réflexion sur la mise en scène et les symboles : objets, espaces et cadrages deviennent des indices narratifs permettant de traduire visuellement l’état intérieur du personnage. L’ensemble prend la forme d’un diaporama vidéo où la succession d’images, le rythme du montage et la narration sonore plongent le spectateur dans une expérience immersive et introspective.`,
    ],
    voirSite: 'https://youtu.be/Ze5kgyQJ8ag',
    objectifs: [
      'Explorer la narration visuelle à travers la photographie',
      'Créer un récit poétique combinant image, son et voix off',
      'Expérimenter la direction artistique et la mise en scène photographique',
      'Traduire visuellement des émotions liées à la mémoire, à la nostalgie et au passage du temps',
    ],
    resultat:
      'Le projet aboutit à une expérience audiovisuelle sensible où photographie et narration se complètent pour raconter une histoire intime et universelle. À travers une esthétique minimaliste et contemplative, Là-bas, où tout s’efface propose une interprétation personnelle du souvenir et de la transition entre deux étapes de la vie.',
    galerie: ['gallerie_LOTS_1.png', 'gallerie_LOTS_2.png', 'gallerie_LOTS_3.png', 'gallerie_LOTS_4.png', 'gallerie_LOTS_5.png'],
    // (l'ancien id 8ypl0uurl9sjx0h n'existait plus dans tes collections, je l'ai retiré)
    similaires: ['ocean-autopsy', 'modulo'],
  },

  // ───────────────────────── OCEAN AUTOPSY ─────────────────────────
  {
    slug: 'ocean-autopsy',
    nom: 'Campagne ocean autopsy',
    titre: 'Ocean autopsy',
    photo: 'gallerie_OA_1.png',
    filtres: ['Design graphique'],
    competencesCarte: ['mock-up', 'direction artistique', 'design graphique'],
    competences: ['Design graphique', 'UI/UX', 'Direction artistique'],
    extrait:
      'Campagne de sensibilisation métaphorique sur la pollution des océans, utilisant l’imagerie médicale et les rayons X pour révéler l’impact invisible du plastique sur les animaux marins.',
    explication: [
      `Ocean Autopsy est une campagne de sensibilisation à la pollution plastique des océans. Son principe : simuler une autopsie visuelle des animaux marins pour révéler ce que la pollution dissimule à l'intérieur de leurs corps.`,
      `La direction artistique s'inspire de l'imagerie médicale — les radiographies. Chaque visuel présente un animal marin (baleine, tortue, oiseau, dauphin, crabe) dont l'intérieur laisse apparaître des déchets plastiques, signalés en rouge pour marquer leur caractère toxique. Chaque animal est associé à une réalité documentée : les tortues confondant les sacs plastiques avec des méduses, les oiseaux ingérant des fragments plastiques, les microplastiques retrouvés dans les organismes des cétacés.`,
      `La campagne ancre son propos dans des données scientifiques : près de 90 % des oiseaux marins contiendraient du plastique dans leur système digestif, un chiffre qui pourrait concerner la quasi-totalité des espèces marines d'ici 2050.`,
      `En associant métaphore médicale, faits scientifiques et esthétique minimaliste, Ocean Autopsy cherche à rendre visible ce qui reste ordinairement caché — et à transformer cette révélation en prise de conscience.`,
    ],
    objectifs: [
      'Sensibiliser à l’impact de la pollution plastique sur les animaux marins',
      'Utiliser une métaphore visuelle forte pour rendre visible un problème souvent invisible',
      'Créer une campagne visuelle cohérente déclinable sur plusieurs supports',
      'Associer design graphique et données scientifiques pour renforcer le message',
    ],
    resultat:
      'Ocean Autopsy propose une campagne visuelle percutante qui transforme les radiographies en outil de sensibilisation. En révélant symboliquement la présence de plastique à l’intérieur des animaux marins, les visuels créent un contraste fort entre la beauté de la faune marine et la réalité de la pollution, invitant le spectateur à prendre conscience de l’urgence environnementale.',
    galerie: ['gallerie_OA_1.png', 'gallerie_OA_2.png', 'gallerie_OA_3.png', 'gallerie_OA_4.png', 'gallerie_OA_5.png'],
    similaires: ['modulo', 'la-quete', 'la-bas-ou-tout-s-efface'],
  },

  // ───────────────────────── MODULO ─────────────────────────
  {
    slug: 'modulo',
    nom: 'Modulo',
    titre: 'Modulo',
    photo: 'gallerie_MODU_1.png',
    filtres: ['Design graphique'],
    competencesCarte: ['branding', 'mock-up', 'design graphique'],
    competences: ['Branding', 'UI/UX', 'Motion design'],
    extrait:
      'Création d’une identité visuelle et d’un logo typographique pour mōdulo, une marque de mobilier modulaire écoresponsable pensée pour les espaces contemporains.',
    explication: [
      `Le projet mōdulo consiste à concevoir une identité visuelle cohérente avec les valeurs fondamentales de la marque : modularité, élégance et écoresponsabilité. L’objectif était de créer un univers graphique capable de traduire à la fois l’innovation du concept et la dimension durable de ses produits.`,
      `La direction artistique s’oriente vers une esthétique minimaliste, chic et contemporaine, inspirée par les codes du design mobilier moderne. L’identité visuelle repose sur des lignes épurées et une typographie élégante, permettant de refléter le caractère fonctionnel et esthétique des meubles modulaires proposés par la marque.`,
      `Le travail s’est principalement concentré sur la conception d’un logo typographique, mettant en avant la lettre “O”, élément central du mot mōdulo. Dans la proposition finale, ce caractère est revisité à travers une découpe graphique subtile, créant un signe distinctif qui évoque la modularité et la flexibilité du concept. Cette intervention visuelle apporte une dimension symbolique tout en conservant une grande simplicité formelle.`,
      `La découpe placée sur la partie inférieure de la lettre crée un jeu d’équilibre et d’alignement avec le reste du mot, renforçant l’harmonie globale du logo. Ce choix permet également d’introduire différentes interprétations visuelles, tout en conservant une lecture claire et immédiate de la marque.`,
      `Le résultat est un logo minimaliste, élégant et facilement mémorisable, conçu pour fonctionner efficacement sur différents supports : identité digitale, packaging, communication ou impression. Sa simplicité garantit également une excellente lisibilité, même à petite échelle.`,
      `Enfin, le système graphique a été pensé avec une logique de durabilité et d’évolution dans le temps. Par exemple, la forme du “ō” pourrait être réinterprétée lors d’un anniversaire de la marque, en pivotant pour former un “10”, tout en conservant la cohérence visuelle de l’identité. Cette approche démontre la capacité du logo à évoluer tout en restant fidèle à l’image de mōdulo.`,
    ],
    objectifs: [
      'Créer une identité visuelle moderne et cohérente avec les valeurs de la marque',
      'Mettre en avant la modularité et la flexibilité du concept à travers le design',
      'Développer un logo typographique simple, élégant et mémorable',
      'Concevoir une identité durable et adaptable à différents supports',
    ],
    resultat:
      'Le projet aboutit à une identité visuelle minimaliste et contemporaine, capable de traduire les valeurs d’innovation et d’écoresponsabilité de mōdulo. Grâce à un logo typographique distinctif et une direction artistique épurée, la marque bénéficie d’une image forte, facilement identifiable et adaptée aux usages actuels du design et de la communication.',
    galerie: ['gallerie_MODU_1.png', 'gallerie_MODU_2.png', 'gallerie_MODU_3.png', 'gallerie_MODU_4.png', 'gallerie_MODU_5.png'],
    similaires: ['ocean-autopsy', 'la-quete', 'la-bas-ou-tout-s-efface'],
  },
  // ───────────────────────── EN COLOC ─────────────────────────
  {
    slug: 'en-coloc',
    nom: 'En Coloc',
    titre: 'En Coloc',
    photo: 'gallerie_COLOC_1.png',
    filtres: ['Direction Artistique', 'Motion design'],
    competencesCarte: ['direction artistique', 'montage', 'première pro'],
    competences: ['Direction artistique', 'Montage vidéo', 'Adobe Premiere Pro', 'Projet collaboratif'],
    extrait:
      'Direction artistique et montage audiovisuel d’un podcast consacré à la mobilité étudiante, à travers les expériences, les découvertes et les conseils de ceux qui sont partis étudier à l’étranger.',
    explication: [
      `En Coloc est un projet de podcast consacré à l’expérience des études à l’étranger. À travers des échanges et des témoignages, le projet revient sur les réalités de la mobilité étudiante, de la préparation du départ à la découverte d’un nouvel environnement.`,
      `Le premier épisode, consacré à un semestre au Canada, aborde les attentes avant le départ, les surprises rencontrées sur place, les erreurs commises et les conseils que les participants auraient aimé recevoir avant de partir.`,
      `Le travail réalisé porte sur la direction artistique et le montage audiovisuel du projet. L’objectif est de proposer un contenu clair et agréable à suivre, tout en construisant une identité visuelle cohérente avec le ton du podcast.`,
      `Ce projet permet de travailler sur la mise en valeur d’un contenu parlé à travers le rythme du montage, l’organisation des séquences et les choix visuels, afin de rendre l’expérience racontée accessible et engageante.`,
    ],
    embed:
      'https://open.spotify.com/embed/episode/00t9xfag69FwqGovLHFRYQ/video?utm_source=generator&si=dc5ad8d6fa464aed',
    objectifs: [
      'Concevoir une direction artistique cohérente avec l’identité du podcast.',
      'Monter un contenu audiovisuel autour de témoignages et d’expériences personnelles.',
      'Valoriser la parole et les échanges grâce au rythme du montage.',
      'Rendre les informations et les conseils accessibles à un public étudiant.',
    ],
    resultat:
      'Le projet prend la forme d’un épisode audiovisuel qui rassemble témoignages, expériences et conseils autour du départ à l’étranger. Le travail de direction artistique et de montage contribue à structurer le contenu et à proposer une expérience adaptée aux usages numériques.',
    galerie: ['gallerie_COLOC_1.png', 'gallerie_COLOC_2.jpeg', 'gallerie_COLOC_3.jpeg'],
    similaires: ['modulo', 'la-quete', 'la-bas-ou-tout-s-efface'],
  },

  // ───────────────────────── HAVE YOU SEEN THEM? ─────────────────────────
  {
    slug: 'have-you-seen-them',
    nom: 'HAVE YOU SEEN THEM?',
    titre: 'HAVE YOU SEEN THEM?',
    photo: 'gallerie_V-CK_1.png',
    filtres: ['Direction Artistique', 'Branding', 'Design graphique'],
    competencesCarte: ['direction artistique', 'branding', 'design graphique', 'mock-up'],
    competences: ['Direction artistique', 'Stratégie créative', 'Identité visuelle', 'Storytelling', 'Conception de campagne', 'Design graphique'],
    extrait:
      'Direction artistique et conception d’une campagne fictive Vitra × Calvin Klein autour d’une collection de sept objets horlogers. Un lancement transformé en enquête immersive, entre mode, design et storytelling.',
    explication: [
      `HAVE YOU SEEN THEM? est un concept de campagne imaginé dans le cadre d’un appel d’offres fictif pour le Vitra Design Museum. Le projet repose sur une collaboration entre Vitra et Calvin Klein, autour d’une collection de sept objets horlogers qui réinterprètent la montre comme un objet de design et de parure.`,
      `Inspirée notamment par le travail de George Nelson et par l’héritage horloger de Calvin Klein, la collection détourne les usages traditionnels de la montre pour en faire des accessoires à porter autrement.`,
      `L’enjeu principal est de faire découvrir Vitra à un nouveau public, sensible à la mode, au luxe et à la culture visuelle. Pour cela, le lancement de la collection devient une enquête fictive : les sept pièces disparaissent et le public est invité à participer à leur recherche.`,
      `La campagne se déploie à travers différents supports : affiches, vidéos, contenus pour les réseaux sociaux, packs destinés aux influenceurs et indices disséminés dans plusieurs villes européennes. Chaque élément contribue à faire progresser l’histoire jusqu’à la révélation finale au Vitra Campus.`,
      `Le travail de direction artistique consiste à créer un univers visuel cohérent avec les deux marques, tout en développant une narration capable de susciter la curiosité et de donner envie au public de participer.`,
    ],
    voirSite: 'https://vitra-x-calvin-klein.netlify.app/#lancement',
    objectifs: [
      'Imaginer une collaboration créative entre deux univers complémentaires : le design et la mode.',
      'Développer une direction artistique cohérente avec les identités de Vitra et Calvin Klein.',
      'Concevoir une campagne narrative qui suscite la curiosité et encourage la participation du public.',
      'Décliner un concept créatif sur différents supports print et numériques.',
      'Donner au public une nouvelle raison de découvrir le Vitra Campus.',
    ],
    resultat:
      'Le projet aboutit à un concept de campagne immersif qui associe création d’objets, storytelling et communication multicanale. L’enquête devient le fil conducteur de l’ensemble des supports et transforme le lancement de la collection en une expérience qui conduit progressivement le public vers le Vitra Campus.',
    galerie: ['gallerie_V-CK_1.png', 'gallerie_V-CK_2.png', 'gallerie_V-CK_3.png', 'gallerie_V-CK_4.png', 'gallerie_V-CK_5.mp4'],
    similaires: ['modulo', 'la-quete', 'la-bas-ou-tout-s-efface'],
  },

  // ───────────────────────── FA'BULL'EUX FESTIVAL ─────────────────────────
  {
    slug: 'fabulleux-festival',
    nom: 'Fa’bull’eux Festival',
    titre: 'Fa’bull’eux Festival',
    photo: 'gallerie_FAB_1.jpg',
    filtres: ['Design graphique', 'Direction Artistique', 'Motion design'],
    competencesCarte: ['direction artistique', 'design graphique', 'print', 'after effect', 'montage', 'première pro', 'motion design'],
    competences: ['Direction artistique', 'Design graphique', 'Mise en page', 'Adobe InDesign', 'Adobe Illustrator', 'Adobe Photoshop', 'Motion design', 'Adobe After Effects', 'Montage vidéo sur Premiere Pro'],
    extrait:
      'Conception de supports de communication pour la troisième édition du Fa’bull’eux Festival : affiche, brochure trois volets, animation de logo et vidéo promotionnelle. Une direction artistique colorée et ludique pensée pour les jeunes enfants et leurs familles.',
    explication: [
      `Dans le cadre de mon stage au service communication de la Communauté de Communes du Sundgau, j’ai participé à la communication de la troisième édition du Fa’bull’eux Festival, un événement destiné aux enfants de 0 à 6 ans et à leurs familles.`,
      `Le projet comprenait plusieurs supports complémentaires : une affiche au format A3, une brochure trois volets, une animation du logo et une vidéo promotionnelle destinée aux réseaux sociaux.`,
      `Pour l’affiche, j’ai commencé par analyser les éditions précédentes et réaliser des recherches graphiques afin de proposer trois directions artistiques différentes. La version retenue associe des tons bleus évoquant l’eau, des accents jaunes et une composition dynamique autour d’une photographie détourée.`,
      `J’ai ensuite conçu une brochure qui rassemble le programme, les informations pratiques et un plan illustré du site de la piscine. Réalisé sur Illustrator, ce plan adopte un style isométrique enfantin afin d’aider les familles à se repérer et à se projeter dans l’événement.`,
      `Le projet s’est poursuivi avec une animation du logo sur After Effects, construite autour d’un effet dynamique évoquant du pop-corn, puis avec le montage d’une vidéo promotionnelle sur Premiere Pro intégrant cette animation.`,
      `L’ensemble m’a permis de travailler sur une communication cohérente entre différents supports, en conciliant attractivité visuelle, lisibilité des informations et adaptation à un public composé d’enfants et de parents.`,
    ],
    voirSite: 'https://youtube.com/shorts/WKSgoN3VrLk?feature=share',
    objectifs: [
      'Développer une direction artistique adaptée aux jeunes enfants et à leurs familles.',
      'Décliner un univers graphique sur différents supports de communication.',
      'Concevoir des supports imprimés attractifs et lisibles.',
      'Expérimenter la création d’un plan illustré sur Illustrator.',
      'Créer une animation de logo et une vidéo promotionnelle pour les réseaux sociaux.',
      'Assurer une cohérence visuelle entre les supports print et audiovisuels.',
    ],
    resultat:
      'Le projet a donné lieu à un ensemble de supports complémentaires pour promouvoir le festival : une affiche, une brochure imprimée à 300 exemplaires, une animation de logo et une vidéo promotionnelle. Cette expérience m’a permis de développer ma polyvalence graphique et audiovisuelle tout en adaptant mes choix créatifs aux besoins d’une collectivité et de son public.',
    galerie: ['gallerie_FAB_1.jpg', 'gallerie_FAB_2.png', 'gallerie_FAB_3.mp4', 'gallerie_FAB_4.png'],
    similaires: ['modulo', 'la-quete', 'la-bas-ou-tout-s-efface'],
  },

];

export const getProjet = (slug: string) => projets.find((p) => p.slug === slug);