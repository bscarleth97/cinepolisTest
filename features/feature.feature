@watch
Feature: Test
    Scenario: Cinepolis San Pedro
        Given we are in Cinepolis
        When we select "105" in "cmbCiudades"
        And we select "cinepolis-san-pedro" in "cmbComplejos"
        When we go through the movies list ".datalayer-movie"