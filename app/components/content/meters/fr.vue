<template>
  <div class="just-text">
    <h4>
      Meters: plateforme IoT souveraine pour le suivi de la consommation
      énergétique et des températures
    </h4>
    <p>
      Initialement développé pour répondre aux besoins d'un client spécifique,
      ce projet est désormais proposé en tant que service cloud par
      Naito&nbsp;One. La plateforme intègre des périphériques connectés équipés
      d'une large gamme de capteurs, communiquant tous avec une infrastructure
      centrale qui enregistre les données dans le temps. Une interface web
      permet aux prenneurs de décisions de visualiser et d'analyser les données,
      de définir des objectifs et de configurer des alertes.
    </p>
    <p>
      Ce service peut être déployé pour surveiller la consommation dans les
      bâtiments municipaux ou dans des entreprises multisites, une exigence clé
      pour la certification environnementale ISO 14001. Il aide à identifier les
      inefficacités des systèmes de chauffage et les comportements défavorables
      des occupants, en fournissant des rapports factuels qui se traduisent par
      des économies tangibles sur les factures énergétiques.
    </p>
  </div>
  <slot />
  <div class="just-text">
    <h5>Points clés du projet</h5>
    <ul>
      <li>
        Conçu en interne pour répondre aux exigences de la norme ISO 14001
      </li>
      <li>Mobile first</li>
      <li>Multilingue</li>
      <li>Infrastructure IoT cloud ou sur site</li>
      <li>Système de suivi des objectifs et de rappels</li>
      <li>Système d'alerte en temps réel</li>
      <li>Outils d'exploration, de visualisation et d'export des données</li>
      <li>Accès multi-tenant avec tableaux de bord personnalisés</li>
      <li>
        Prend en charge la plupart des types de compteurs d'énergie (M-BUS,
        SCR+, IEC 62056-21)
      </li>
      <li>
        Extensible à d'autres collectes de données (humidité, niveau sonore,
        etc.)
      </li>
      <li>
        Interface extensible pour des visualisations supplémentaires (signatures
        énergétiques, cartes, etc.)
      </li>
    </ul>
  </div>
</template>
