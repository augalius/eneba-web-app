CREATE EXTENSION IF NOT EXISTS pg_trgm;

CREATE TABLE IF NOT EXISTS games (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    platform TEXT NOT NULL,
    region TEXT NOT NULL,
    price NUMERIC(10,2) NOT NULL,
    discount INTEGER DEFAULT 0,
    final_price NUMERIC(10,2) NOT NULL,
    cashback NUMERIC(10,2) DEFAULT 0.00,
    likes INTEGER DEFAULT 0,
    image_url TEXT
);

INSERT INTO games (name, platform, region, price, discount, final_price, cashback, likes, image_url) VALUES
('Fifa 23', 'PS5', 'EU', 59.99, 65, 20.99, 2.94, 259, 'https://imgproxy.eneba.games/BSE-fizvG-vHLi2e12EG6EC6g6A8ww6Ul9Ean756Pos/rs:fit:600/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9n/eGxzb3FkZzVOS0RN/dkVQMFo5b0J0eG56/U0hxV3NqU2pDcEJf/SEdMeVBRLmpwZw'),
('Red Dead Redemption 2', 'PC', 'Global', 49.99, 48, 25.99, 3.64, 914, 'https://imgproxy.eneba.games/tj16rXTWbuJ1sEuTGrNvfCz2504X5YBuywPXTcMRtGU/rs:fit:600/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9n/SkpWQXdzMkNGeklr/RnQyQUZLLU45em9T/SjZYOE8xTklBUUI5/bkZIQnpVLmpwZWc'),
('Split Fiction', 'Nintendo', 'EU', 19.99, 50, 9.99, 1.40, 236, 'https://imgproxy.eneba.games/fAZaD1e4nBZ4pEgEuLMJObWarONd7PrJGsWUHtQbLMM/rs:fit:600/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9z/blMxMVM4SURqcHFF/NzZDLU9HdDRZMXJD/X1YzR1gzSTBVX3ZK/WEVMcTdjLmpwZw');