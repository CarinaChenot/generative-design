const lineColors = {
  1: 'rgba(255,192,0,1)',
  2: 'rgba(41, 73, 146,1)',
  3: 'rgba(162 153, 23, 1)',
  4: 'rgba(190, 66, 142, 1)',
  5: 'rgba(240, 144, 67, 1)',
  6: 'rgba(133, 193, 142, 1)',
  7: 'rgba(242,  164, 183, 1)',
  8: 'rgba(204, 172, 207, 1)',
  9: 'rgba(213, 201, 0, 1)',
  10: 'rgba(228, 178, 40, 1)',
  11: 'rgba(140, 94, 36, 1)',
  12: 'rgba(0, 127, 73, 1)',
  13: 'rgba(153, 211, 222, 1)',
  14: 'rgba(98, 33, 128, 1)',
};

const stopsList = [
  'NATION',
  'GARE DU NORD',
  'OBERKAMPF',
  'DAUMESNIL',
  'COUR SAINT-EMILION',
  'JULES JOFFRIN',
  'BASILIQUE DE SAINT-DENIS',
  'SAINT-DENIS-UNIVERSITE',
  'LE KREMLIN-BICETRE',
  'GABRIEL PERI',
  'ROBESPIERRE',
  'GALLIENI',
  'CHATELET',
  'STALINGRAD',
  'MADELEINE',
  'BASTILLE',
  'GAMBETTA',
  'BIR-HAKEIM',
  'LES HALLES',
  'ANVERS',
  'FRONT POPULAIRE',
  'MAIRIE DE CLICHY',
  'PLACE DES FETES',
  'NOTRE-DAME-DE-LORETTE',
  'RUE DES BOULETS',
  'MALESHERBES',
  'COURCELLES',
  'ARGENTINE',
  'TUILERIES',
  'GAITE',
  'CARREFOUR PLEYEL',
  "CRETEIL-L'ECHAT",
  'ARTS ET METIERS',
  'DUROC',
  'PORTE DE BAGNOLET',
  'QUAI DE LA GARE',
  'POISSONNIERE',
  'LES GOBELINS',
  'JOURDAIN',
  'SIMPLON',
  'BOURSE',
  'CRETEIL-UNIVERSITE',
  'SAINT-SEBASTIEN-FROISSART',
  'ASSEMBLEE NATIONALE',
  'CARDINAL LEMOINE',
  "EGLISE D'AUTEUIL",
  'SULLY-MORLAND',
  'BOTZARIS',
  'MONCEAU',
  'RENNES',
  'MAUBERT-MUTUALITE',
  'QUATRE-SEPTEMBRE',
  "PORTE D'ITALIE",
  'EDGAR QUINET',
  'FELIX FAURE',
  'SOLFERINO',
  'MABILLON',
  'BEL AIR',
  'MALAKOFF-RUE ETIENNE DOLET',
  'LES AGNETTES',
  'SAINT-LAZARE',
  'REPUBLIQUE',
  "PLACE D'ITALIE",
  'GARE DE LYON',
  "GARE DE L'EST",
  'BELLEVILLE',
  'LA DEFENSE',
  'LOUIS BLANC',
  'PORTE DE LA CHAPELLE',
  'JAVEL-ANDRE CITROEN',
  'FAIDHERBE-CHALIGNY',
  'SAINT-JACQUES',
  'LE PELETIER',
  'CORVISART',
  'RANELAGH',
  'CHARENTON-ECOLES',
  'LIBERTE',
  'BONNE NOUVELLE',
  'PERE LACHAISE',
  'ECOLE MILITAIRE',
  "CHATEAU D'EAU",
  'GUY MOQUET',
  'RAMBUTEAU',
  'GLACIERE',
  'BLANCHE',
  'ALESIA',
  'OURCQ',
  'ALEXANDRE DUMAS',
  'SAINT-PLACIDE',
  'VICTOR HUGO',
  'FUNICULAIRE',
  'CHEVALERET',
  'CAMBRONNE',
  'TOLBIAC',
  'BOULOGNE-PONT DE SAINT-CLOUD',
  'CORENTIN CELTON',
  'ANATOLE FRANCE',
  'PELLEPORT',

  'SEVRES-BABYLONE',
  'RICHELIEU-DROUOT',
  'GRANDS BOULEVARDS',
  'INVALIDES',
  'BERCY',
  'SAINT-MICHEL',
  'CONVENTION',
  'VILLEJUIF-LOUIS ARAGON',
  'CROIX DE CHAVAUX',
  'MICHEL-ANGE-AUTEUIL',
  'NOTRE-DAME-DES-CHAMPS',
  'PHILIPPE AUGUSTE',
  'SAINT-FARGEAU',
  'MAISON BLANCHE',
  'RICHARD LENOIR',
  'RUE DU BAC',
  'BOLIVAR',
  'JASMIN',
  'TEMPLE',
  'DENFERT-ROCHEREAU',
  'JUSSIEU',
  'SAINT-GERMAIN DES PRES',
  'PORTE DE MONTREUIL',
  'PORTE DE CLICHY',
  'LAUMIERE',
  'DUPLEIX',
  'PEREIRE',
  'LES COURTILLES',
  'MAIRIE DES LILAS',
  'PORTE DAUPHINE',
  'ETIENNE MARCEL',
  'VOLONTAIRES',
  'TELEGRAPHE',
  'PORTE DOREE',
  'BOUCICAUT',
  'RIQUET',
  'BILLANCOURT',
  'BERAULT',
  "MAIRIE D'IVRY",
  'CONCORDE',
  'HAVRE-CAUMARTIN',
  'VILLIERS',
  'PORTE DE CLIGNANCOURT',
  "PORTE D'ORLEANS",
  'PORTE MAILLOT',
  'LA CHAPELLE',
  'LES SABLONS',
  'CHATILLON-MONTROUGE',
  'MAIRIE DE MONTREUIL',
  'PYRAMIDES',
  'PASTEUR',
  'PORTE DE VANVES',
  'VOLTAIRE',
  'PONT DE LEVALLOIS-BECON',
  'LA COURNEUVE-8 MAI 1945',
  'MARCEL SEMBAT',
  'CHATEAU DE VINCENNES',
  'CRETEIL-PREFECTURE',
  'HOCHE',
  'PORTE DES LILAS',
  'PORTE DE SAINT-OUEN',
  'LEDRU-ROLLIN',
  'MARX DORMOY',
  'VAUGIRARD',
  'TERNES',
  'SENTIER',
  'PASSY',
  'LOUISE MICHEL',
  'EGLISE DE PANTIN',
  "TRINITE-D'ESTIENNE D'ORVES",
  'SAINT-FRANCOIS-XAVIER',
  'FILLES DU CALVAIRE',
  'PORTE DE CHARENTON',
  'MOUTON-DUVERNET',
  'CHATEAU-LANDON',
  'PONT MARIE',
  'BOISSIERE',
  'LIEGE',
  'MAISONS-ALFORT-STADE',
  'PRE-SAINT-GERVAIS',
  'AVENUE EMILE ZOLA',
  'BUTTES-CHAUMONT',
  "PORTE D'AUTEUIL",
  'CHEMIN VERT',
  'VARENNE',
  'KLEBER',
  'PICPUS',
  'SEGUR',
  'STRASBOURG-SAINT-DENIS',
  'BARBES-ROCHECHOUART',
  'HOTEL DE VILLE',
  'BIBLIOTHEQUE',
  'ESPLANADE DE LA DEFENSE',
  'MONTPARNASSE-BIENVENUE',
  'CHARLES DE GAULLE-ETOILE',
  'JAURES',
  'OPERA',
  'MARCADET-POISSONNIERS',
  'PLACE CLICHY',
  'TROCADERO',
  'REAUMUR-SEBASTOPOL',
  'REUILLY-DIDEROT',
  'MIROMESNIL',
  'CHARLES MICHELS',
  'COLONEL FABIEN',
  'MENILMONTANT',
  'ALMA-MARCEAU',
  'GEORGE V',
  'SAINT-DENIS-PORTE DE PARIS',
  'MAIRIE DE SAINT-OUEN',
  'FRANKLIN D. ROOSEVELT',
  'SEVRES-LECOURBE',
  'SAINT-SULPICE',
  'SAINT-MARCEL',
  'DUGOMMIER',
  'ABBESSES',
  'MIRABEAU',
  'WAGRAM',
  'IENA',
  'BOBIGNY-PANTIN-RAYMOND QUENEAU',
  'CENSIER-DAUBENTON',
  'RUE DE LA POMPE',
  'SAINT-AUGUSTIN',
  'LA MUETTE',
  'PYRENEES',
  'COURONNES',
  'BROCHANT',
  'BOULOGNE-JEAN JAURES',
  'CRETEIL-POINTE DU LAC',
  'GARIBALDI',
  'QUAI DE LA RAPEE',
  'CHARDON-LAGACHE',
  'CAMPO-FORMIO',
  'VANEAU',
  'LA MOTTE-PICQUET-GRENELLE',
  "GARE D'AUSTERLITZ",
  'PALAIS-ROYAL',
  'BOBIGNY-PABLO PICASSO',
  "CHAUSSEE D'ANTIN-LA FAYETTE",
  'PORTE DE VERSAILLES',
  'PORTE DE VINCENNES',
  'OLYMPIADES',
  'SAINT-PAUL',
  'CRIMEE',
  'AUBERVILLIERS-PANTIN-QUATRE CHEMINS',
  'PONT DE NEUILLY',
  'SAINT-MANDE-TOURELLE',
  'MAIRIE DE MONTROUGE',
  'PORTE DE LA VILLETTE',
  'PORTE DE CHAMPERRET',
  'PLACE MONGE',
  'PARMENTIER',
  'GONCOURT',
  'PERNETY',
  'CADET',
  'ECOLE VETERINAIRE DE MAISONS-ALFORT',
  'MALAKOFF-PLATEAU DE VANVES',
  "FORT D'AUBERVILLIERS",
  'CLUNY LA SORBONNE',
  'JACQUES BONSERGENT',
  'CHATEAU ROUGE',
  'BREGUET-SABIN',
  'NATIONALE',
  'LOURMEL',
  'VAVIN',
  'LOUVRE',
  'VILLEJUIF-PAUL VAILLANT-COUTURIER',
  'VILLEJUIF-LEO LAGRANGE',
  'SAINT-PHILIPPE-DU-ROULE',
  'LAMARCK-CAULAINCOURT',
  'PORTE DE CHOISY',
  'CORENTIN CARIOU',
  'SAINT-AMBROISE',
  'LA FOURCHE',
  'MARAICHERS',
  'SAINT-MAUR',
  'COMMERCE',
  'ROME',
  'CHAMPS-ELYSEES-CLEMENCEAU',
  'PIGALLE',
  'ODEON',
  'PORTE DE SAINT-CLOUD',
  'PORTE DE PANTIN',
  'PLAISANCE',
  'CHARONNE',
  'BALARD',
  'PONT DE SEVRES',
  "MAIRIE D'ISSY",
  'MICHEL-ANGE-MOLITOR',
  'RASPAIL',
  'LA TOUR-MAUBOURG',
  'MICHEL BIZOT',
  "PORTE D'IVRY",
  'BUZENVAL',
  'EXELMANS',
  'AVRON',
  'CITE',
  'MAISONS-ALFORT-LES JUILLIOTTES',
  'SAINT-GEORGES',
  'MONTGALLET',
  'FALGUIERE',
  'PONT NEUF',
  'DANUBE',
  'EUROPE',
  'PIERRE CURIE',
];
