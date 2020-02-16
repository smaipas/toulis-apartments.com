<template>
  <v-layout column>
    <v-flex xs12 sm8 md6>
      homepage
    </v-flex>
  </v-layout>
</template>

<script>
/**
 * Home page.
 */
export default {
  name: 'Index',
  i18n: {
    messages: {
      en: {
        home: {
          threeboxes: {
            t1: 'Make a Reservation',
            t2: 'View our Apartments',
            t3: 'Prices and Offers',
          },
          complex: {
            h: 'THE COMPLEX',
            h1: 'Located at City Center',
            p1:
              'TOULIS Apartments is located in Polychrono at the first peninsula of Halkidiki, in Kassandra.',
            h2: 'Close to beach',
            p2: 'Only 200m away from the wonderful beach.',
            h3: 'Close to all amenities',
            p3:
              'Restaurant: 20m, Cafe-bar: 30m, Supermarket: 50m, Farmacy: 30m, Bakery: 10m',
            h4: 'Pleasant Stay',
            p4:
              'A quiet and beautiful environment maintained for years in a place with hospitality to enjoy your vacation and well rested.',
          },
        },
      },
      el: {
        home: {
          threeboxes: {
            t1: 'Κάντε Κράτηση',
            t2: 'Δείτε τα Διαμερίσματα',
            t3: 'Τιμές και Προσφορές',
          },
          complex: {
            h: 'ΤΟ ΣΥΓΚΡΟΤΗΜΑ',
            h1: 'Στο κέντρο της πόλης',
            p1:
              'Τα διαμερίσματα TOULIS Apartments βρίσκονται στο Πολύχρονο, στο πρώτο πόδι της Χαλκιδικής, στην Κασσάνδρα',
            h2: 'Κοντά στην παραλία',
            p2: 'Μόνο 200μ. μακριά από τη θάλασσα.',
            h3: 'Κοντά σε...',
            p3:
              'Εστιατόριο: 20μ., Cafe-bar: 30μ., Supermarket: 50μ., Φαρμακείο: 30μ., Φούρνος: 10μ.',
            h4: 'Ευχάριστη διαμονή',
            p4:
              'Ένα ήσυχο και όμορφο περιβάλλον διατηρείται για χρόνια σε ένα χώρο γεμάτο φιλοξενία για να απολαύσετε τις διακοπές σας ξεκούραστα και όμορφα.',
          },
        },
      },
      rs: {
        home: {
          threeboxes: {
            t1: 'Rezervisati',
            t2: 'Pogledajte naše apartmane',
            t3: 'Cene i ponuda',
          },
          complex: {
            h: 'KOMPLEKS',
            h1: 'Nalazi se u centru mesta',
            p1:
              'TULIS Apartmani nalaze se u Polihronu na prvom poluostrvu Halkidikija, na Kasandri.',
            h2: 'Blizu plaže',
            p2: 'Samo 200m udaljen od prelepe plaže.',
            h3: 'U blizini se nalaze',
            p3:
              'Restoran: 20m, Cafe-bar: 30m, Supermarket: 50m, Apoteka: 30m, Pekara 10m',
            h4: 'Prijatan boravak',
            p4:
              'Miran i lep ambijent godinama čuvan u gostoprimljivom mestu u kojem ćete uživati u Vašem odmoru i u kojem ćete se dobro odmoriti.',
          },
        },
      },
    },
  },
};
</script>
