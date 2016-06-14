"""
    Commands run daily in this order:
        1. add_games
        2. add_pitcher_stats
        3. add_game_events
        4. crunch_numbers_pitchers
"""
from customer_browser.management.commands.customer_data import \
    customer_data_list
from customer_browser.models import Customer
from django.core.management import BaseCommand


class Command(BaseCommand):

    def handle(self, *args, **options):

        created_count = 0
        for customer in customer_data_list:
            email = customer[1]

            # Check if Customer exists already
            num_results = Customer.objects.filter(email=email).count()
            if num_results == 0:

                first_name = customer[2]
                last_name = customer[3]
                ip = customer[4]
                latitude = customer[5]
                longitude = customer[6]
                created_at = customer[7]

                Customer.objects.create(
                    email=email,
                    first_name=first_name,
                    last_name=last_name,
                    ip=ip,
                    latitude=latitude,
                    longitude=longitude,
                    created_at=created_at
                )
                created_count += 1

        self.stdout.write("New Customers Added to the database {}".format(created_count))
