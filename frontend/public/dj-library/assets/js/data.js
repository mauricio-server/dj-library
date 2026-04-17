/* ============================================
   DJ LIBRARY — Fake Dataset (static)
   ============================================ */

// Genres (balanced across House, Techno, DnB, Hip-Hop)
window.DJ_GENRES = [
  { name: 'Tech House',       count: 428, color: '#a855f7' },
  { name: 'Techno',           count: 356, color: '#06b6d4' },
  { name: 'Deep House',       count: 289, color: '#ec4899' },
  { name: 'Drum & Bass',      count: 214, color: '#f59e0b' },
  { name: 'Melodic Techno',   count: 198, color: '#22d3ee' },
  { name: 'Progressive House',count: 176, color: '#8b5cf6' },
  { name: 'Hip-Hop',          count: 164, color: '#ef4444' },
  { name: 'Minimal',          count: 142, color: '#14b8a6' },
  { name: 'Afro House',       count: 121, color: '#f97316' },
  { name: 'Trap',             count: 98,  color: '#eab308' },
  { name: 'UK Garage',        count: 87,  color: '#10b981' },
  { name: 'Disco',            count: 74,  color: '#f43f5e' },
];

// Tracks (50+ realistic items)
window.DJ_TRACKS = [
  { id: 1,  artist: 'Fisher',             track: 'Losing It',               remix: 'Original Mix',  genre: 'Tech House',     year: 2018, bpm: 126, key: 'A min',  format: 'MP3',  duration: '6:43', cover: 1 },
  { id: 2,  artist: 'Charlotte de Witte', track: 'Selected',                remix: 'Original Mix',  genre: 'Techno',         year: 2022, bpm: 134, key: 'F# min', format: 'WAV',  duration: '7:12', cover: 2 },
  { id: 3,  artist: 'CamelPhat',          track: 'Cola',                    remix: 'Elderbrook Rmx',genre: 'Tech House',     year: 2017, bpm: 122, key: 'G min',  format: 'FLAC', duration: '6:55', cover: 3 },
  { id: 4,  artist: 'Amelie Lens',        track: 'Hypnotized',              remix: 'Original Mix',  genre: 'Techno',         year: 2019, bpm: 132, key: 'D min',  format: 'WAV',  duration: '6:20', cover: 4 },
  { id: 5,  artist: 'Netsky',             track: 'Rio',                     remix: 'VIP Mix',       genre: 'Drum & Bass',    year: 2019, bpm: 174, key: 'A min',  format: 'MP3',  duration: '4:31', cover: 5 },
  { id: 6,  artist: 'Adam Beyer',         track: 'Your Mind',               remix: 'Bart Skils Rmx',genre: 'Techno',         year: 2020, bpm: 130, key: 'E min',  format: 'FLAC', duration: '7:45', cover: 6 },
  { id: 7,  artist: 'Tale Of Us',         track: 'Another Day',             remix: 'Extended Mix',  genre: 'Melodic Techno', year: 2021, bpm: 124, key: 'C# min', format: 'WAV',  duration: '8:02', cover: 7 },
  { id: 8,  artist: 'Kendrick Lamar',     track: 'HUMBLE.',                 remix: '—',             genre: 'Hip-Hop',        year: 2017, bpm: 150, key: 'B min',  format: 'MP3',  duration: '2:57', cover: 8 },
  { id: 9,  artist: 'Travis Scott',       track: 'SICKO MODE',              remix: '—',             genre: 'Hip-Hop',        year: 2018, bpm: 155, key: 'G min',  format: 'MP3',  duration: '5:12', cover: 0 },
  { id: 10, artist: 'Solomun',            track: 'Home',                    remix: 'Original Mix',  genre: 'Deep House',     year: 2019, bpm: 120, key: 'A min',  format: 'WAV',  duration: '7:28', cover: 1 },
  { id: 11, artist: 'ARTBAT',             track: 'Horizon',                 remix: 'Original Mix',  genre: 'Melodic Techno', year: 2020, bpm: 125, key: 'F min',  format: 'FLAC', duration: '7:50', cover: 2 },
  { id: 12, artist: 'Wilkinson',          track: 'Afterglow',               remix: 'Original Mix',  genre: 'Drum & Bass',    year: 2013, bpm: 174, key: 'C min',  format: 'MP3',  duration: '3:48', cover: 3 },
  { id: 13, artist: 'Chris Lake',         track: 'Turn Off The Lights',     remix: 'Extended Mix',  genre: 'Tech House',     year: 2021, bpm: 127, key: 'G# min', format: 'WAV',  duration: '6:12', cover: 4 },
  { id: 14, artist: 'Sub Focus',          track: 'Turn It Around',          remix: 'Club Mix',      genre: 'Drum & Bass',    year: 2011, bpm: 175, key: 'D min',  format: 'MP3',  duration: '5:43', cover: 5 },
  { id: 15, artist: 'Mau P',              track: 'Drugs From Amsterdam',    remix: 'Original Mix',  genre: 'Tech House',     year: 2022, bpm: 128, key: 'F# min', format: 'WAV',  duration: '5:42', cover: 6 },
  { id: 16, artist: 'Nina Kraviz',        track: 'Skyscrapers',             remix: 'Original Mix',  genre: 'Techno',         year: 2015, bpm: 133, key: 'A min',  format: 'FLAC', duration: '6:38', cover: 7 },
  { id: 17, artist: 'Drake',              track: 'One Dance',               remix: '—',             genre: 'Hip-Hop',        year: 2016, bpm: 103, key: 'B min',  format: 'MP3',  duration: '2:54', cover: 8 },
  { id: 18, artist: 'Dennis Ferrer',      track: 'Hey Hey',                 remix: 'Original Mix',  genre: 'Deep House',     year: 2010, bpm: 124, key: 'G min',  format: 'MP3',  duration: '7:02', cover: 0 },
  { id: 19, artist: 'Dimension',          track: 'UK',                      remix: 'Original Mix',  genre: 'Drum & Bass',    year: 2019, bpm: 174, key: 'F min',  format: 'WAV',  duration: '4:22', cover: 1 },
  { id: 20, artist: 'Anna',               track: 'Paradise Lost',           remix: 'Extended Mix',  genre: 'Progressive House', year: 2021, bpm: 123, key: 'C# min', format: 'WAV', duration: '8:15', cover: 2 },
  { id: 21, artist: 'J. Cole',            track: 'No Role Modelz',          remix: '—',             genre: 'Hip-Hop',        year: 2014, bpm: 100, key: 'A min',  format: 'MP3',  duration: '4:52', cover: 3 },
  { id: 22, artist: 'Four Tet',           track: 'Two Thousand and Seventeen', remix: 'Original',   genre: 'Deep House',     year: 2017, bpm: 116, key: 'D min',  format: 'FLAC', duration: '5:40', cover: 4 },
  { id: 23, artist: 'Claude VonStroke',   track: 'Who\'s Afraid of Detroit', remix: 'Original Mix', genre: 'Tech House',     year: 2007, bpm: 124, key: 'E min',  format: 'MP3',  duration: '6:45', cover: 5 },
  { id: 24, artist: 'Len Faki',           track: 'Rainbow Delta',           remix: 'Original Mix',  genre: 'Techno',         year: 2019, bpm: 135, key: 'G min',  format: 'WAV',  duration: '7:58', cover: 6 },
  { id: 25, artist: 'Andhim',             track: 'Hausch',                  remix: 'Original Mix',  genre: 'Deep House',     year: 2013, bpm: 120, key: 'A# min', format: 'FLAC', duration: '6:24', cover: 7 },
  { id: 26, artist: 'MK',                 track: '17',                      remix: 'Original Mix',  genre: 'Tech House',     year: 2017, bpm: 124, key: 'F min',  format: 'WAV',  duration: '6:14', cover: 8 },
  { id: 27, artist: 'Black Coffee',       track: 'You Need Me',             remix: 'Original Mix',  genre: 'Afro House',     year: 2019, bpm: 119, key: 'G min',  format: 'FLAC', duration: '6:34', cover: 0 },
  { id: 28, artist: 'Kanye West',         track: 'Flashing Lights',         remix: '—',             genre: 'Hip-Hop',        year: 2007, bpm: 124, key: 'A min',  format: 'MP3',  duration: '3:57', cover: 1 },
  { id: 29, artist: 'Pendulum',           track: 'The Island - Pt I',       remix: 'Dawn',          genre: 'Drum & Bass',    year: 2010, bpm: 174, key: 'D min',  format: 'MP3',  duration: '5:40', cover: 2 },
  { id: 30, artist: 'Boris Brejcha',      track: 'Gravity',                 remix: 'Original Mix',  genre: 'Minimal',        year: 2020, bpm: 130, key: 'C# min', format: 'WAV',  duration: '9:10', cover: 3 },
  { id: 31, artist: 'Disclosure',         track: 'Latch',                   remix: 'Original Mix',  genre: 'UK Garage',      year: 2012, bpm: 122, key: 'F# min', format: 'MP3',  duration: '4:16', cover: 4 },
  { id: 32, artist: 'Honey Dijon',        track: 'Downtown',                remix: 'Original Mix',  genre: 'Disco',          year: 2018, bpm: 122, key: 'A min',  format: 'WAV',  duration: '6:32', cover: 5 },
  { id: 33, artist: 'Dom Dolla',          track: 'San Frandisco',           remix: 'Original Mix',  genre: 'Tech House',     year: 2019, bpm: 124, key: 'G min',  format: 'WAV',  duration: '6:22', cover: 6 },
  { id: 34, artist: 'Lane 8',             track: 'Atlas',                   remix: 'Original Mix',  genre: 'Progressive House', year: 2019, bpm: 122, key: 'D min', format: 'FLAC', duration: '7:05', cover: 7 },
  { id: 35, artist: 'Stormzy',            track: 'Vossi Bop',               remix: '—',             genre: 'Hip-Hop',        year: 2019, bpm: 140, key: 'F min',  format: 'MP3',  duration: '3:25', cover: 8 },
  { id: 36, artist: 'Andy C',             track: 'Heartbeat Loud',          remix: 'Original Mix',  genre: 'Drum & Bass',    year: 2016, bpm: 174, key: 'G min',  format: 'WAV',  duration: '4:58', cover: 0 },
  { id: 37, artist: 'Diplo',              track: 'On My Mind',              remix: 'Ranger Trucco', genre: 'Tech House',     year: 2020, bpm: 125, key: 'B min',  format: 'MP3',  duration: '3:45', cover: 1 },
  { id: 38, artist: 'Stephan Bodzin',     track: 'Powers of Ten',           remix: 'Original Mix',  genre: 'Melodic Techno', year: 2015, bpm: 123, key: 'E min',  format: 'FLAC', duration: '7:45', cover: 2 },
  { id: 39, artist: 'Hot Since 82',       track: 'Buggin',                  remix: 'Original Mix',  genre: 'Deep House',     year: 2018, bpm: 123, key: 'A# min', format: 'WAV',  duration: '6:48', cover: 3 },
  { id: 40, artist: 'Future',             track: 'Mask Off',                remix: '—',             genre: 'Trap',           year: 2017, bpm: 150, key: 'C# min', format: 'MP3',  duration: '3:24', cover: 4 },
  { id: 41, artist: 'Peggy Gou',          track: 'It Makes You Forget',     remix: 'Original Mix',  genre: 'Deep House',     year: 2018, bpm: 124, key: 'F# min', format: 'WAV',  duration: '6:11', cover: 5 },
  { id: 42, artist: 'Kölsch',             track: 'Grey',                    remix: 'Original Mix',  genre: 'Melodic Techno', year: 2019, bpm: 124, key: 'A min',  format: 'FLAC', duration: '7:30', cover: 6 },
  { id: 43, artist: 'Metallica',          track: 'The Memory Remains',      remix: 'Disclosure Rmx',genre: 'Progressive House', year: 2020, bpm: 123, key: 'D# min', format: 'WAV', duration: '7:18', cover: 7 },
  { id: 44, artist: 'Jamie Jones',        track: 'Paradise',                remix: 'Original Mix',  genre: 'Tech House',     year: 2016, bpm: 126, key: 'G min',  format: 'FLAC', duration: '6:58', cover: 8 },
  { id: 45, artist: 'Chase & Status',     track: 'Backbone',                remix: 'Original Mix',  genre: 'Drum & Bass',    year: 2022, bpm: 174, key: 'F min',  format: 'WAV',  duration: '4:12', cover: 0 },
  { id: 46, artist: 'The Weeknd',         track: 'Blinding Lights',         remix: '—',             genre: 'Hip-Hop',        year: 2019, bpm: 171, key: 'F min',  format: 'MP3',  duration: '3:20', cover: 1 },
  { id: 47, artist: 'Carl Cox',           track: 'Pure',                    remix: 'Extended Mix',  genre: 'Techno',         year: 2021, bpm: 132, key: 'E min',  format: 'FLAC', duration: '7:22', cover: 2 },
  { id: 48, artist: 'Purple Disco Machine',track: 'Hypnotized',             remix: 'Club Mix',      genre: 'Disco',          year: 2020, bpm: 122, key: 'C min',  format: 'WAV',  duration: '6:05', cover: 3 },
  { id: 49, artist: 'Sofi Tukker',        track: 'Drinkee',                 remix: 'Vintage Culture',genre: 'Tech House',    year: 2019, bpm: 124, key: 'G# min', format: 'MP3',  duration: '3:44', cover: 4 },
  { id: 50, artist: 'Bicep',              track: 'Apricots',                remix: 'Original Mix',  genre: 'Progressive House', year: 2021, bpm: 128, key: 'A# min', format: 'FLAC', duration: '5:51', cover: 5 },
  { id: 51, artist: 'Maceo Plex',         track: 'Solar Detroit',           remix: 'Original Mix',  genre: 'Techno',         year: 2020, bpm: 128, key: 'D min',  format: 'WAV',  duration: '8:22', cover: 6 },
  { id: 52, artist: 'Disclosure',         track: 'You & Me',                remix: 'Flume Remix',   genre: 'UK Garage',      year: 2013, bpm: 120, key: 'F min',  format: 'MP3',  duration: '5:12', cover: 7 },
];

// Wanted Lists history
window.DJ_WANTED_LISTS = [
  { id: 'wl_001', name: 'Summer Festival 2024',    tracks: 48,  date: '2024-06-12', status: 'processed', have: 31, missing: 9, possible: 8 },
  { id: 'wl_002', name: 'Closing Set Ibiza',       tracks: 22,  date: '2024-07-03', status: 'processed', have: 18, missing: 2, possible: 2 },
  { id: 'wl_003', name: 'Warehouse Techno',        tracks: 64,  date: '2024-07-19', status: 'processed', have: 42, missing: 14, possible: 8 },
  { id: 'wl_004', name: 'Sunset Rooftop Vibes',    tracks: 35,  date: '2024-08-02', status: 'processed', have: 28, missing: 4, possible: 3 },
  { id: 'wl_005', name: 'DnB Liquid Flow',         tracks: 18,  date: '2024-08-14', status: 'draft',     have: 0, missing: 0, possible: 0 },
  { id: 'wl_006', name: 'Hip-Hop Throwbacks',      tracks: 41,  date: '2024-08-22', status: 'processed', have: 33, missing: 5, possible: 3 },
];

// Recent matches (feeding matches.html + dashboard)
window.DJ_MATCHES = [
  { wanted_artist: 'Fisher',              wanted_track: 'Losing It',             status: 'have',     match: 'Fisher - Losing It',                      score: 100, type: 'exact' },
  { wanted_artist: 'Charlotte de Witte',  wanted_track: 'Selected (Original)',   status: 'have',     match: 'Charlotte de Witte - Selected',           score: 98,  type: 'clean' },
  { wanted_artist: 'Boris Brejcha',       wanted_track: 'Gravity VIP',           status: 'possible', match: 'Boris Brejcha - Gravity',                 score: 82,  type: 'fuzzy' },
  { wanted_artist: 'Maceo Plex',          wanted_track: 'Detroit Solar',         status: 'possible', match: 'Maceo Plex - Solar Detroit',              score: 89,  type: 'fuzzy' },
  { wanted_artist: 'Tale of Us',          wanted_track: 'Unknown Track',         status: 'missing',  match: '—',                                        score: 0,   type: 'none' },
  { wanted_artist: 'Carl Cox',            wanted_track: 'Pure (Extended)',       status: 'have',     match: 'Carl Cox - Pure (Extended Mix)',          score: 97,  type: 'clean' },
  { wanted_artist: 'Solomun',             wanted_track: 'Home',                  status: 'have',     match: 'Solomun - Home',                          score: 100, type: 'exact' },
  { wanted_artist: 'Anna',                wanted_track: 'Paradise',              status: 'possible', match: 'Anna - Paradise Lost',                    score: 76,  type: 'fuzzy' },
  { wanted_artist: 'ARTBAT',              wanted_track: 'Horizon',               status: 'have',     match: 'ARTBAT - Horizon',                        score: 100, type: 'exact' },
  { wanted_artist: 'Amelie Lens',         wanted_track: 'Hypnotized (VIP)',      status: 'missing',  match: '—',                                        score: 0,   type: 'none' },
  { wanted_artist: 'Wilkinson',           wanted_track: 'Afterglow',             status: 'have',     match: 'Wilkinson - Afterglow',                   score: 100, type: 'exact' },
  { wanted_artist: 'Kendrick Lamar',      wanted_track: 'Humble.',               status: 'have',     match: 'Kendrick Lamar - HUMBLE.',                score: 96,  type: 'clean' },
  { wanted_artist: 'Peggy Gou',           wanted_track: 'It Makes U Forget',     status: 'possible', match: 'Peggy Gou - It Makes You Forget',         score: 88,  type: 'fuzzy' },
  { wanted_artist: 'Dom Dolla',           wanted_track: 'Miracle Maker',         status: 'missing',  match: '—',                                        score: 0,   type: 'none' },
  { wanted_artist: 'Bicep',               wanted_track: 'Apricots',              status: 'have',     match: 'Bicep - Apricots',                        score: 100, type: 'exact' },
  { wanted_artist: 'Nina Kraviz',         wanted_track: 'Skyscraper',            status: 'possible', match: 'Nina Kraviz - Skyscrapers',               score: 84,  type: 'fuzzy' },
  { wanted_artist: 'Honey Dijon',         wanted_track: 'Downtown',              status: 'have',     match: 'Honey Dijon - Downtown',                  score: 100, type: 'exact' },
  { wanted_artist: 'Disclosure',          wanted_track: 'Latch (Live)',          status: 'possible', match: 'Disclosure - Latch',                      score: 79,  type: 'fuzzy' },
  { wanted_artist: 'Chris Lake',          wanted_track: 'Turn Off Lights',       status: 'have',     match: 'Chris Lake - Turn Off The Lights',        score: 94,  type: 'clean' },
  { wanted_artist: 'Kölsch',              wanted_track: 'Gray',                  status: 'possible', match: 'Kölsch - Grey',                           score: 91,  type: 'fuzzy' },
];

// Recent activity
window.DJ_ACTIVITY = [
  { type: 'import',   text: 'Imported <strong>Summer Festival 2024</strong> wanted list', meta: '2 minutes ago · 48 tracks', icon: 'upload' },
  { type: 'have',     text: 'Matched <strong>Carl Cox - Pure</strong> in local library', meta: '18 minutes ago', icon: 'check' },
  { type: 'missing',  text: '<strong>Dom Dolla - Miracle Maker</strong> missing from library', meta: '42 minutes ago', icon: 'x' },
  { type: 'possible', text: 'Possible match found for <strong>Peggy Gou - It Makes U Forget</strong>', meta: '1 hour ago · 88% score', icon: 'zap' },
  { type: 'scan',     text: 'Library scan completed · <strong>1,247 tracks</strong> indexed', meta: '3 hours ago', icon: 'refresh' },
  { type: 'have',     text: 'Matched <strong>Charlotte de Witte - Selected</strong>', meta: '5 hours ago', icon: 'check' },
  { type: 'import',   text: 'Imported <strong>Hip-Hop Throwbacks</strong> wanted list', meta: '1 day ago · 41 tracks', icon: 'upload' },
];

// Crates
window.DJ_CRATES = [
  { name: 'Peak Time Techno',   tracks: 48, updated: '2 days ago',   covers: [2, 4, 6, 16] },
  { name: 'Sunset Deep',        tracks: 32, updated: '5 days ago',   covers: [10, 22, 25, 39] },
  { name: 'Opening Set',        tracks: 24, updated: '1 week ago',   covers: [34, 20, 50, 42] },
  { name: 'DnB Liquid',         tracks: 41, updated: '3 days ago',   covers: [5, 12, 19, 29] },
  { name: 'Hip-Hop Classics',   tracks: 56, updated: '12 hours ago', covers: [8, 9, 17, 21] },
  { name: 'Closing Anthems',    tracks: 18, updated: '4 days ago',   covers: [1, 15, 33, 49] },
  { name: 'Festival Big Room',  tracks: 37, updated: '6 days ago',   covers: [7, 11, 38, 42] },
  { name: 'Afro Sunrise',       tracks: 28, updated: '2 weeks ago',  covers: [27, 32, 48, 41] },
];

// Duplicates
window.DJ_DUPLICATES = [
  { artist: 'Fisher',            track: 'Losing It',           copies: 2, files: ['MP3 320kbps', 'WAV 44.1kHz'],  cover: 1 },
  { artist: 'Charlotte de Witte',track: 'Selected',            copies: 3, files: ['MP3 320kbps', 'WAV 44.1kHz', 'FLAC'], cover: 2 },
  { artist: 'CamelPhat',         track: 'Cola',                copies: 2, files: ['MP3 192kbps', 'FLAC'], cover: 3 },
  { artist: 'Solomun',           track: 'Home',                copies: 2, files: ['WAV 44.1kHz', 'MP3 320kbps'], cover: 4 },
  { artist: 'Drake',             track: 'One Dance',           copies: 4, files: ['MP3 128kbps', 'MP3 320kbps', 'MP3 192kbps', 'MP3 256kbps'], cover: 5 },
  { artist: 'Bicep',             track: 'Apricots',            copies: 2, files: ['FLAC', 'WAV 44.1kHz'], cover: 6 },
];

// Metrics
window.DJ_METRICS = {
  tracks:      4837,
  artists:     812,
  genres:      24,
  crates:      18,
  wanted:      12,
  matched:     1284,
  missing:     147,
  possible:    96,
  duplicates:  34,
  size:        '182 GB',
};

// Tracks per decade (for chart)
window.DJ_DECADES = [
  { label: "'80s",  value: 124 },
  { label: "'90s",  value: 312 },
  { label: "'00s",  value: 856 },
  { label: "'10s",  value: 1844 },
  { label: "'20s",  value: 1701 },
];

// Cover palette uses grad-0..grad-8 in CSS; helper returns a CSS class
window.coverClass = (i) => `grad-${((i % 9) + 9) % 9}`;

// Use picsum with seed for a real album-art look; falls back to gradient if image fails.
window.coverUrl = (seed) => `https://picsum.photos/seed/djlib-${seed}/120/120`;
