#!/bin/bash
set -e

# Maximum number of attempts
MAX_ATTEMPTS=30
ATTEMPT=1

echo "Waiting for MySQL to be ready..."

# Wait for MySQL to be ready
while [ $ATTEMPT -le $MAX_ATTEMPTS ]; do
    if mysql -h"$WORDPRESS_DB_HOST" -u"$WORDPRESS_DB_USER" -p"$WORDPRESS_DB_PASSWORD" -e "SELECT 1" >/dev/null 2>&1; then
        echo "MySQL is ready!"
        break
    fi
    
    echo "Attempt $ATTEMPT of $MAX_ATTEMPTS: MySQL is not ready yet..."
    sleep 2
    ATTEMPT=$((ATTEMPT + 1))
done

if [ $ATTEMPT -gt $MAX_ATTEMPTS ]; then
    echo "Error: MySQL did not become ready in time"
    exit 1
fi

# Start Apache
exec apache2-foreground 