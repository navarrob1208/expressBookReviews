const books = [
    {
      "bookName": "To Kill a Mockingbird",
      "authorName": "Harper Lee",
      "year": 1960,
      "genre": "Fiction",
      "ISBN": "9780061120084",
      "reviews": [
        {"review": "A classic that tackles important social issues.", "reviewer": "BookReviewer123"},
        {"review": "Must-read for its timeless relevance.", "reviewer": "LiteratureFanatic"}
      ]
    },
    {
      "bookName": "1984",
      "authorName": "George Orwell",
      "year": 1949,
      "genre": "Dystopian",
      "ISBN": "9780451524935",
      "reviews": [
        {"review": "Thought-provoking and chilling.", "reviewer": "DystopiaExplorer"},
        {"review": "A warning about the dangers of totalitarianism.", "reviewer": "PoliticalReader"}
      ]
    },
    {
      "bookName": "The Great Gatsby",
      "authorName": "F. Scott Fitzgerald",
      "year": 1925,
      "genre": "Classic",
      "ISBN": "9780743273565",
      "reviews": [
        {"review": "Captivating portrayal of the Roaring Twenties.", "reviewer": "HistoryBuff21"},
        {"review": "A tragic tale of the American Dream.", "reviewer": "LiteraryDreamer"}
      ]
    },
    {
      "bookName": "Pride and Prejudice",
      "authorName": "Jane Austen",
      "year": 1813,
      "genre": "Romance",
      "ISBN": "9780141439518",
      "reviews": [
        {"review": "Delightful romance with memorable characters.", "reviewer": "RomanceReader22"},
        {"review": "A timeless classic of love and wit.", "reviewer": "BookLover123"}
      ]
    },
    {
      "bookName": "The Catcher in the Rye",
      "authorName": "J.D. Salinger",
      "year": 1951,
      "genre": "Coming-of-age",
      "ISBN": "9780241950432",
      "reviews": [
        {"review": "A journey into the mind of a troubled teenager.", "reviewer": "PsychologyEnthusiast"},
        {"review": "Iconic exploration of teenage angst.", "reviewer": "LiteraryRebel"}
      ]
    },
    {
      "bookName": "Brave New World",
      "authorName": "Aldous Huxley",
      "year": 1932,
      "genre": "Science Fiction",
      "ISBN": "9780060850524",
      "reviews": [
        {"review": "Futuristic and thought-provoking.", "reviewer": "SciFiEnthusiast"},
        {"review": "A cautionary tale about societal control.", "reviewer": "TechFuturist"}
      ]
    },
    {
      "bookName": "The Lord of the Rings",
      "authorName": "J.R.R. Tolkien",
      "year": 1954,
      "genre": "Fantasy",
      "ISBN": "9780544003415",
      "reviews": [
        {"review": "Epic fantasy masterpiece.", "reviewer": "FantasyQuester"},
        {"review": "A journey through Middle-earth that captivates.", "reviewer": "TolkienFanatic"}
      ]
    },
    {
      "bookName": "Moby-Dick",
      "authorName": "Herman Melville",
      "year": 1851,
      "genre": "Adventure",
      "ISBN": "9780142437247",
      "reviews": [
        {"review": "A classic tale of obsession and revenge.", "reviewer": "AdventureSeeker"},
        {"review": "Maritime adventure with rich symbolism.", "reviewer": "LiteraryExplorer"}
      ]
    },
    {
      "bookName": "War and Peace",
      "authorName": "Leo Tolstoy",
      "year": 1869,
      "genre": "Historical Fiction",
      "ISBN": "9780451469885",
      "reviews": [
        {"review": "Epic historical novel with profound insights.", "reviewer": "HistoryScholar"},
        {"review": "A masterpiece that spans generations.", "reviewer": "LiteratureHistorian"}
      ]
    },
    {
      "bookName": "The Hobbit",
      "authorName": "J.R.R. Tolkien",
      "year": 1937,
      "genre": "Fantasy",
      "ISBN": "9780547928227",
      "reviews": [
        {"review": "Enchanting adventure for all ages.", "reviewer": "FantasyExplorer"},
        {"review": "A delightful precursor to The Lord of the Rings.", "reviewer": "MiddleEarthFan"}
      ]
    },
    {
      "bookName": "Alice's Adventures in Wonderland",
      "authorName": "Lewis Carroll",
      "year": 1865,
      "genre": "Children's",
      "ISBN": "9781840227805",
      "reviews": [
        {"review": "Whimsical and imaginative.", "reviewer": "ChildrensBookFan"},
        {"review": "A timeless classic of fantasy and nonsense.", "reviewer": "WonderlandDreamer"}
      ]
    },
    {
      "bookName": "The Odyssey",
      "authorName": "Homer",
      "year": -800,
      "genre": "Epic",
      "ISBN": "9780143039952",
      "reviews": [
        {"review": "An ancient epic of heroism and adventure.", "reviewer": "ClassicsScholar"},
        {"review": "A journey of myth and timeless storytelling.", "reviewer": "EpicEnthusiast"}
      ]
    },
    {
      "bookName": "Frankenstein",
      "authorName": "Mary Shelley",
      "year": 1818,
      "genre": "Gothic",
      "ISBN": "9780486282114",
      "reviews": [
        {"review": "A gothic masterpiece of science and morality.", "reviewer": "GothicLitLover"},
        {"review": "Profound exploration of the consequences of creation.", "reviewer": "LiteraryScientist"}
      ]
    },
    {
      "bookName": "The Hitchhiker's Guide to the Galaxy",
      "authorName": "Douglas Adams",
      "year": 1979,
      "genre": "Science Fiction",
      "ISBN": "9780345391803",
      "reviews": [
        {"review": "Hilarious and absurd intergalactic adventure.", "reviewer": "SciFiHumorFan"},
        {"review": "A comedic journey through space with memorable characters.", "reviewer": "GalacticTraveler"}
      ]
    },
    {
      "bookName": "One Hundred Years of Solitude",
      "authorName": "Gabriel García Márquez",
      "year": 1967,
      "genre": "Magical Realism",
      "ISBN": "9780061120091",
      "reviews": [
        {"review": "Magical and beautifully written.", "reviewer": "MagicalRealismFan"},
        {"review": "A multigenerational tale of wonder and tragedy.", "reviewer": "LiteraryDreamWeaver"}
      ]
    },
    {
      "bookName": "Anna Karenina",
      "authorName": "Leo Tolstoy",
      "year": 1877,
      "genre": "Realist Fiction",
      "ISBN": "9780143035008",
      "reviews": [
        {"review": "A masterpiece of realist literature.", "reviewer": "RealismScholar"},
        {"review": "Complex characters in a tale of love and societal norms.", "reviewer": "LiteraryRealist"}
      ]
    },
    {
      "bookName": "The Grapes of Wrath",
      "authorName": "John Steinbeck",
      "year": 1939,
      "genre": "Social Realism",
      "ISBN": "9780143039433",
      "reviews": [
        {"review": "Powerful portrayal of social injustice.", "reviewer": "SocialJusticeReader"},
        {"review": "A classic of American literature with enduring relevance.", "reviewer": "LiteratureActivist"}
      ]
    },
    {
      "bookName": "The Shining",
      "authorName": "Stephen King",
      "year": 1977,
      "genre": "Horror",
      "ISBN": "9780307743657",
      "reviews": [
        {"review": "Terrifying and psychologically gripping.", "reviewer": "HorrorAficionado"},
        {"review": "A masterclass in horror storytelling.", "reviewer": "StephenKingFan"}
      ]
    },
    {
      "bookName": "Harry Potter and the Philosopher's Stone",
      "authorName": "J.K. Rowling",
      "year": 1997,
      "genre": "Fantasy",
      "ISBN": "9780590353427",
      "reviews": [
        {"review": "Magical and enchanting start to the series.", "reviewer": "Potterhead"},
        {"review": "A journey into the wizarding world that captivates readers.", "reviewer": "WizardingWorldExplorer"}
      ]
    },
    {
      "bookName": "The Count of Monte Cristo",
      "authorName": "Alexandre Dumas",
      "year": 1844,
      "genre": "Adventure",
      "ISBN": "9780140449266",
      "reviews": [
        {"review": "Intriguing and full of twists.", "reviewer": "AdventureFanatic"},
        {"review": "An epic tale of revenge.", "reviewer": "StoryEnthusiast"}
      ]
    },
    {
      "bookName": "The Picture of Dorian Gray",
      "authorName": "Oscar Wilde",
      "year": 1890,
      "genre": "Gothic Fiction",
      "ISBN": "9780486278070",
      "reviews": [
        {"review": "Wilde's masterpiece.", "reviewer": "LiteraryCritic123"},
        {"review": "A dark and philosophical exploration.", "reviewer": "PhilosophyReader"}
      ]
    }
];
module.exports = books;