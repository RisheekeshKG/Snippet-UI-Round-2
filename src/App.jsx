import { useState, useMemo } from 'react'

// SVG Icons inlined for reliability and pixel-perfect rendering
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white hover:opacity-80 transition-opacity">
    <path d="M3 7H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M9.49219 12H21.0022" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M3 12H5.99" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M3 17H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const SnippetLogo = () => (
  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 6.63507C0 2.97062 2.97062 0 6.63507 0H28.3649C32.0294 0 35 2.97062 35 6.63507V28.3649C35 32.0294 32.0294 35 28.3649 35H6.63507C2.97062 35 0 32.0294 0 28.3649V6.63507Z" fill="black" />
    <path d="M26.6544 22.6576C27.7797 21.4717 28.5884 20.234 29.0803 18.9445C29.5721 17.6551 29.7427 16.4266 29.592 15.2591C29.4413 14.0916 28.9347 13.0986 28.0722 12.2801C27.2713 11.5201 26.3871 11.0176 25.4195 10.7726C24.4365 10.513 23.3024 10.5052 22.0172 10.7491C20.7166 10.9784 19.234 11.4302 17.5696 12.1046C16.3507 12.5871 15.3534 12.9286 14.5777 13.1291C13.802 13.3296 13.1805 13.3985 12.7133 13.3356C12.2307 13.2582 11.8431 13.0806 11.5504 12.8029C11.15 12.4229 10.9581 11.9773 10.9748 11.4663C10.9768 10.9706 11.2263 10.461 11.7232 9.93731C12.2493 9.38286 12.7972 9.08316 13.3667 9.03821C13.9362 8.99326 14.4366 9.1754 14.8679 9.58463C15.0989 9.80386 15.2861 10.0693 15.4294 10.3809C15.5573 10.678 15.6434 11.0962 15.6875 11.6357C15.7163 12.1606 15.7275 12.8737 15.721 13.775L15.5323 29.7973L19.6829 30.004L19.873 12.3146C19.8917 11.3079 19.8388 10.4382 19.7145 9.70552C19.5902 8.97287 19.3932 8.33223 19.1235 7.7836C18.8392 7.25038 18.4738 6.77184 18.0271 6.348C17.2417 5.60262 16.3513 5.15285 15.356 4.99868C14.3608 4.84452 13.3433 4.99131 12.3038 5.43906C11.2488 5.87218 10.239 6.59699 9.27439 7.61348C8.38286 8.55296 7.76956 9.50768 7.43452 10.4776C7.06945 11.4484 6.98146 12.3894 7.17052 13.3005C7.34497 14.2271 7.81723 15.0558 8.58729 15.7866C9.26495 16.4296 10.0495 16.8521 10.9409 17.0541C11.8168 17.2414 12.8447 17.207 14.0245 16.9508C15.1896 16.71 16.5744 16.2533 18.1788 15.5805C19.2784 15.1311 20.2168 14.8362 20.9941 14.6957C21.7414 14.556 22.3794 14.5468 22.9083 14.6681C23.4371 14.7895 23.9094 15.0474 24.3253 15.442C24.7103 15.8074 24.9472 16.2518 25.036 16.7751C25.1102 17.3138 25.0274 17.8792 24.7876 18.4712C24.5478 19.0632 24.1502 19.6518 23.5948 20.2371C22.7032 21.1766 21.6692 21.8344 20.4925 22.2107C19.3005 22.5723 18.0175 22.6134 16.6435 22.334C15.2395 22.0554 13.8041 21.4396 12.3374 20.4868L10.498 24.2296C12.3758 25.3969 14.2869 26.1128 16.2312 26.3773C18.1756 26.6417 20.0408 26.4652 21.8268 25.8478C23.6129 25.2303 25.2221 24.1669 26.6544 22.6576Z" fill="#E7E9EA" />
    <path d="M10.2465 21.0288C10.2465 21.9449 9.5038 22.6875 8.58769 22.6875C7.67157 22.6875 6.92892 21.9449 6.92892 21.0288C6.92892 20.1127 7.67157 19.37 8.58769 19.37C9.5038 19.37 10.2465 20.1127 10.2465 21.0288Z" fill="#F06CB7" />
  </svg>
);

const LocationIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brandMuted">
    <path d="M5.9975 6.71497C6.85906 6.71497 7.5575 6.01654 7.5575 5.15497C7.5575 4.29341 6.85906 3.59497 5.9975 3.59497C5.13594 3.59497 4.4375 4.29341 4.4375 5.15497C4.4375 6.01654 5.13594 6.71497 5.9975 6.71497Z" stroke="currentColor" />
    <path d="M1.80888 4.245C2.79388 -0.0849988 9.20888 -0.0799987 10.1889 4.25C10.7639 6.79 9.18388 8.94 7.79888 10.27C6.79388 11.24 5.20388 11.24 4.19388 10.27C2.81388 8.94 1.23388 6.785 1.80888 4.245Z" stroke="currentColor" />
  </svg>
);

const TagIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
    <path d="M2.26091 8.28756L4.71466 10.7413C5.72216 11.7488 7.35799 11.7488 8.37091 10.7413L10.7488 8.36339C11.7563 7.35589 11.7563 5.72006 10.7488 4.70714L8.28966 2.25881C7.77508 1.74422 7.06549 1.46797 6.33966 1.50589L3.63133 1.63589C2.54799 1.68464 1.68674 2.54589 1.63258 3.62381L1.50258 6.33214C1.47008 7.06339 1.74633 7.77297 2.26091 8.28756Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.14323 6.50002C5.89111 6.50002 6.4974 5.89374 6.4974 5.14585C6.4974 4.39797 5.89111 3.79169 5.14323 3.79169C4.39534 3.79169 3.78906 4.39797 3.78906 5.14585C3.78906 5.89374 4.39534 6.50002 5.14323 6.50002Z" stroke="currentColor" strokeLinecap="round" />
  </svg>
);

const INITIAL_EVENTS = [
  {
    id: 1,
    day: 'Today',
    dayOfWeek: 'Tuesday',
    time: '10:00 PM',
    title: 'Indo-UAW Startup Conect',
    location: 'PSG iTech, Coimbatore',
    category: 'Debate',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80',
    badges: [
      { text: '₹ 10,000 Prize Pool', emoji: '🤑' },
      { text: '₹ 100 Entry', emoji: '🎟️' }
    ],
    hoodType: 'your',
    description: 'Connect with emerging tech leaders from UAE and India. Pitch your ideas, participate in high-stakes debate, and stand a chance to win from a ₹10,000 prize pool!'
  },
  {
    id: 2,
    day: 'Tomorrow',
    dayOfWeek: 'Wednesday',
    time: '10:00 PM',
    title: 'Event 2',
    location: 'PSG iTech, Coimbatore',
    category: 'Hackathon',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80',
    badges: [
      { text: 'FREE Entry', emoji: '🙌' }
    ],
    hoodType: 'your',
    description: 'Unleash your creativity and coding skills in Event 2 Hackathon. Work in teams, build awesome projects overnight, and network with leading developers.'
  },
  {
    id: 3,
    day: 'Tomorrow',
    dayOfWeek: 'Wednesday',
    time: '10:00 PM',
    title: 'Event 3',
    location: 'PSG iTech, Coimbatore',
    category: 'Debate',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80',
    badges: [
      { text: 'FREE Entry', emoji: '🙌' }
    ],
    hoodType: 'your',
    description: 'Event 3 is a challenging Debate battle testing your analytical and speaking abilities. Challenge peers on contemporary economic and technological issues.'
  },
  // "Other Hoods" Data to make the tab interactive
  {
    id: 4,
    day: 'Today',
    dayOfWeek: 'Tuesday',
    time: '07:30 PM',
    title: 'Coimbatore AI Mixer',
    location: 'PSG College of Technology',
    category: 'Networking',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&q=80',
    badges: [
      { text: '₹ 5,000 Cash Prizes', emoji: '🤑' },
      { text: 'FREE Entry', emoji: '🙌' }
    ],
    hoodType: 'other',
    description: 'Join developers, hobbyists, and AI startups around Coimbatore. Learn about LLM architectures, agents, and share what you have been building.'
  },
  {
    id: 5,
    day: 'Tomorrow',
    dayOfWeek: 'Wednesday',
    time: '09:00 AM',
    title: 'Design Sprint Workshop',
    location: 'KCT Tech Park, Coimbatore',
    category: 'Workshop',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80',
    badges: [
      { text: 'FREE Entry', emoji: '🙌' }
    ],
    hoodType: 'other',
    description: 'A practical, hands-on workshop led by industry designers on Google Ventures Design Sprint methodology. Learn to prototype and test ideas in just 5 days.'
  }
];

function App() {
  const [activeTab, setActiveTab] = useState('your'); // 'your' or 'other'
  const [events, setEvents] = useState(INITIAL_EVENTS);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Interactive Modal / Drawer States
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter Preferences
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [entryFilter, setEntryFilter] = useState('All'); // 'All', 'Free', 'Paid'

  // New Event Form State
  const [newTitle, setNewTitle] = useState('');
  const [newLocation, setNewLocation] = useState('PSG iTech, Coimbatore');
  const [newTime, setNewTime] = useState('10:00 PM');
  const [newDay, setNewDay] = useState('Today'); // 'Today' or 'Tomorrow'
  const [newDayOfWeek, setNewDayOfWeek] = useState('Tuesday'); // e.g. Tuesday or Wednesday
  const [newCategory, setNewCategory] = useState('Debate');
  const [newPrizePool, setNewPrizePool] = useState('');
  const [newEntryFee, setNewEntryFee] = useState('');
  const [newDescription, setNewDescription] = useState('');

  // Handle Event Creation
  const handleCreateSubmit = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const badges = [];
    if (newPrizePool.trim()) {
      badges.push({ text: `₹ ${newPrizePool} Prize Pool`, emoji: '🤑' });
    }
    if (newEntryFee.trim() && parseInt(newEntryFee) > 0) {
      badges.push({ text: `₹ ${newEntryFee} Entry`, emoji: '🎟️' });
    } else {
      badges.push({ text: 'FREE Entry', emoji: '🙌' });
    }

    const categoryImages = {
      'Debate': 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80',
      'Hackathon': 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80',
      'Workshop': 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80',
      'Networking': 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&q=80'
    };

    const newEvent = {
      id: events.length + 1,
      day: newDay,
      dayOfWeek: newDayOfWeek,
      time: newTime,
      title: newTitle,
      location: newLocation,
      category: newCategory,
      image: categoryImages[newCategory] || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80',
      badges: badges,
      hoodType: activeTab,
      description: newDescription || `A premium ${newCategory} event happening at ${newLocation}. Don't miss out on this opportunity!`
    };

    setEvents([newEvent, ...events]);

    // Reset Form & Close Modal
    setNewTitle('');
    setNewPrizePool('');
    setNewEntryFee('');
    setNewDescription('');
    setIsCreateOpen(false);
  };

  // Filtered & Grouped Events list
  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      // Hood filter
      if (event.hoodType !== activeTab) return false;

      // Category filter
      if (categoryFilter !== 'All' && event.category !== categoryFilter) return false;

      // Entry Ticket filter
      if (entryFilter !== 'All') {
        const hasFreeBadge = event.badges.some(b => b.text.toLowerCase().includes('free'));
        if (entryFilter === 'Free' && !hasFreeBadge) return false;
        if (entryFilter === 'Paid' && hasFreeBadge) return false;
      }

      return true;
    });
  }, [events, activeTab, categoryFilter, entryFilter]);

  // Group events by day ('Today' or 'Tomorrow')
  const groupedEvents = useMemo(() => {
    const groups = {
      Today: [],
      Tomorrow: []
    };
    filteredEvents.forEach(event => {
      if (groups[event.day]) {
        groups[event.day].push(event);
      } else {
        // Fallback for custom added days
        if (!groups[event.day]) groups[event.day] = [];
        groups[event.day].push(event);
      }
    });
    return groups;
  }, [filteredEvents]);

  // Get distinct categories in current hood
  const allCategories = useMemo(() => {
    const cats = new Set(events.filter(e => e.hoodType === activeTab).map(e => e.category));
    return ['All', ...Array.from(cats)];
  }, [events, activeTab]);

  return (
    <div className="flex-1 bg-black min-h-screen text-brandText flex flex-col justify-start items-center p-0 md:py-6">

      {/* Container simulating high fidelity mobile app layout on desktop */}
      <div className="w-full max-w-md bg-black min-h-screen md:min-h-[850px] md:max-h-[920px] md:rounded-[40px] md:border-[10px] md:border-zinc-900 md:shadow-[0_0_50px_rgba(255,255,255,0.03)] flex flex-col relative overflow-y-auto overflow-x-hidden scrollbar-thin">

        {/* Mobile Status Bar simulation on desktop */}
        <div className="hidden md:flex justify-between items-center px-6 py-2.5 text-[11px] font-medium text-zinc-500 bg-black select-none border-b border-zinc-950">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.17 19.58 10.53 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" /></svg>
            <span className="w-5 h-2.5 border border-zinc-500 rounded-sm relative after:content-[''] after:absolute after:top-[1px] after:right-[-2px] after:w-0.5 after:h-1.2 after:bg-zinc-500"></span>
          </div>
        </div>

        {/* 1. Header (Navbar) */}
        <header className="flex justify-between items-center px-4 py-4 sticky top-0 bg-black/90 backdrop-blur-md z-30 select-none">
          <div className="flex items-center gap-3">
            <button className="p-1 hover:bg-zinc-900 rounded-lg transition-colors">
              <MenuIcon />
            </button>
            <div className="cursor-pointer transition-transform hover:scale-105 active:scale-95">
              <SnippetLogo />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setNewDay(activeTab === 'your' ? 'Today' : 'Tomorrow');
                setNewDayOfWeek(activeTab === 'your' ? 'Tuesday' : 'Wednesday');
                setIsCreateOpen(true);
              }}
              className="px-3.5 py-1.5 rounded-full border border-brandBorder text-xs font-semibold text-brandText bg-black hover:border-brandPink hover:text-brandPink hover:shadow-[0_0_12px_rgba(240,108,183,0.15)] transition-all duration-200"
            >
              create event
            </button>
            <button
              onClick={() => setIsFilterOpen(true)}
              className={`px-3.5 py-1.5 rounded-full border text-xs font-semibold bg-black transition-all duration-200 ${categoryFilter !== 'All' || entryFilter !== 'All'
                ? 'border-brandPink text-brandPink shadow-[0_0_10px_rgba(240,108,183,0.1)]'
                : 'border-brandBorder text-brandText hover:border-white'
                }`}
            >
              filter
            </button>
          </div>
        </header>

        {/* 2. Interactive Navigation Tabs */}
        <nav className="flex border-b border-zinc-900 relative z-20 select-none">
          <button
            onClick={() => {
              setActiveTab('your');
              setCategoryFilter('All');
              setEntryFilter('All');
            }}
            className="flex-1 py-3 text-center text-sm font-semibold transition-all duration-200 relative"
          >
            <span className={activeTab === 'your' ? 'text-brandText font-bold' : 'text-[#5C6168] hover:text-zinc-400'}>
              your hoods
            </span>
            {activeTab === 'your' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-white rounded-t-full transition-transform duration-300"></span>
            )}
          </button>
          <button
            onClick={() => {
              setActiveTab('other');
              setCategoryFilter('All');
              setEntryFilter('All');
            }}
            className="flex-1 py-3 text-center text-sm font-semibold transition-all duration-200 relative"
          >
            <span className={activeTab === 'other' ? 'text-brandText font-bold' : 'text-[#5C6168] hover:text-zinc-400'}>
              other hoods
            </span>
            {activeTab === 'other' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-white rounded-t-full transition-transform duration-300"></span>
            )}
          </button>
        </nav>

        {/* Filters status indicator bar */}
        {(categoryFilter !== 'All' || entryFilter !== 'All') && (
          <div className="bg-zinc-950 px-4 py-2 flex items-center justify-between text-xs border-b border-zinc-900 select-none animate-fadeIn">
            <div className="flex items-center gap-1.5 text-brandPink font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-brandPink animate-ping"></span>
              Showing active filters: {categoryFilter !== 'All' ? `${categoryFilter}` : ''}
              {categoryFilter !== 'All' && entryFilter !== 'All' ? ' + ' : ''}
              {entryFilter !== 'All' ? `${entryFilter} tickets` : ''}
            </div>
            <button
              onClick={() => {
                setCategoryFilter('All');
                setEntryFilter('All');
              }}
              className="text-brandMuted hover:text-brandText underline"
            >
              clear all
            </button>
          </div>
        )}

        {/* 3. Event List Section with Timeline */}
        <main className="flex-1 px-4 py-6 relative select-none">

          {filteredEvents.length === 0 ? (
            <div className="py-24 text-center flex flex-col items-center justify-center animate-fadeIn">
              <svg className="w-12 h-12 text-zinc-700 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-zinc-400 font-semibold mb-1">No events found</h3>
              <p className="text-zinc-600 text-xs px-12">Try clearing your active filters or create a new event in this hood!</p>
            </div>
          ) : (
            <div className="relative pl-7 flex flex-col gap-8">

              {/* Central Vertical Dashed Timeline Track */}
              <div className="absolute left-[15px] top-3 bottom-3 w-0 border-l border-dashed border-zinc-800 z-0"></div>

              {/* Day Section: Today */}
              {groupedEvents.Today && groupedEvents.Today.length > 0 && (
                <section className="relative flex flex-col gap-4 animate-slideUp">

                  {/* Timeline circular node for Today */}
                  <div className="absolute left-[-21px] top-1 w-2.5 h-2.5 rounded-full bg-white border border-black z-10 shadow-[0_0_8px_rgba(255,255,255,0.4)]"></div>

                  {/* Section Title Header */}
                  <div className="flex items-baseline gap-2 mb-1">
                    <h2 className="text-brandText text-sm font-bold tracking-wide">Today</h2>
                    <span className="text-brandMuted text-xs font-normal">Tuesday</span>
                  </div>

                  {/* Cards container */}
                  <div className="flex flex-col gap-4">
                    {groupedEvents.Today.map((event) => (
                      <EventCard
                        key={event.id}
                        event={event}
                        onClick={() => setSelectedEvent(event)}
                      />
                    ))}
                  </div>
                </section>
              )}

              {/* Day Section: Tomorrow */}
              {groupedEvents.Tomorrow && groupedEvents.Tomorrow.length > 0 && (
                <section className="relative flex flex-col gap-4 animate-slideUp">

                  {/* Timeline circular node for Tomorrow */}
                  <div className="absolute left-[-21px] top-1 w-2.5 h-2.5 rounded-full bg-white border border-black z-10 shadow-[0_0_8px_rgba(255,255,255,0.4)]"></div>

                  {/* Section Title Header */}
                  <div className="flex items-baseline gap-2 mb-1">
                    <h2 className="text-brandText text-sm font-bold tracking-wide">Tomorrow</h2>
                    <span className="text-brandMuted text-xs font-normal">Wednesday</span>
                  </div>

                  {/* Cards container */}
                  <div className="flex flex-col gap-4">
                    {groupedEvents.Tomorrow.map((event) => (
                      <EventCard
                        key={event.id}
                        event={event}
                        onClick={() => setSelectedEvent(event)}
                      />
                    ))}
                  </div>
                </section>
              )}

            </div>
          )}
        </main>

        {/* Footer info/credits */}
        <footer className="py-6 border-t border-zinc-950 bg-black text-center text-[10px] text-zinc-600 font-medium select-none">

        </footer>

        {/* 4. Bottom-Sheet Modal: CREATE EVENT */}
        {isCreateOpen && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end justify-center select-none animate-fadeIn">
            <div className="w-full bg-[#0D0E11] border-t border-zinc-800 rounded-t-[30px] p-6 max-h-[85%] overflow-y-auto flex flex-col gap-4 animate-slideUp">

              {/* Drawer Handle */}
              <div className="w-10 h-1 bg-zinc-700 rounded-full mx-auto mb-2"></div>

              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-brandText">create event</h3>
                <button
                  onClick={() => setIsCreateOpen(false)}
                  className="w-7 h-7 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-brandText"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleCreateSubmit} className="flex flex-col gap-4 text-sm mt-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-zinc-400 font-medium">Event Title *</label>
                  <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g. Indo-UAE Startup Connect"
                    required
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-2.5 text-brandText focus:border-brandPink outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-zinc-400 font-medium">Day</label>
                    <select
                      value={newDay}
                      onChange={(e) => {
                        setNewDay(e.target.value);
                        setNewDayOfWeek(e.target.value === 'Today' ? 'Tuesday' : 'Wednesday');
                      }}
                      className="bg-black border border-zinc-800 rounded-xl px-3 py-2.5 text-brandText focus:border-brandPink outline-none"
                    >
                      <option value="Today">Today</option>
                      <option value="Tomorrow">Tomorrow</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-zinc-400 font-medium">Day of Week</label>
                    <input
                      type="text"
                      value={newDayOfWeek}
                      onChange={(e) => setNewDayOfWeek(e.target.value)}
                      placeholder="e.g. Tuesday"
                      className="bg-black border border-zinc-800 rounded-xl px-3 py-2.5 text-brandText focus:border-brandPink outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-zinc-400 font-medium">Time</label>
                    <input
                      type="text"
                      value={newTime}
                      onChange={(e) => setNewTime(e.target.value)}
                      placeholder="10:00 PM"
                      className="bg-black border border-zinc-800 rounded-xl px-3 py-2.5 text-brandText focus:border-brandPink outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-zinc-400 font-medium">Category</label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      className="bg-black border border-zinc-800 rounded-xl px-3 py-2.5 text-brandText focus:border-brandPink outline-none"
                    >
                      <option value="Debate">Debate</option>
                      <option value="Hackathon">Hackathon</option>
                      <option value="Workshop">Workshop</option>
                      <option value="Networking">Networking</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-zinc-400 font-medium">Location</label>
                  <input
                    type="text"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-2.5 text-brandText focus:border-brandPink outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-zinc-400 font-medium">Prize Pool (₹, optional)</label>
                    <input
                      type="text"
                      value={newPrizePool}
                      onChange={(e) => setNewPrizePool(e.target.value)}
                      placeholder="e.g. 10,000"
                      className="bg-black border border-zinc-800 rounded-xl px-3 py-2.5 text-brandText focus:border-brandPink outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-zinc-400 font-medium">Entry Fee (₹, 0 for free)</label>
                    <input
                      type="number"
                      value={newEntryFee}
                      onChange={(e) => setNewEntryFee(e.target.value)}
                      placeholder="e.g. 100"
                      className="bg-black border border-zinc-800 rounded-xl px-3 py-2.5 text-brandText focus:border-brandPink outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-zinc-400 font-medium">Description</label>
                  <textarea
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    placeholder="Provide detailed event agenda..."
                    rows={2}
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-2 text-brandText focus:border-brandPink outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brandPink hover:bg-brandPink/95 active:scale-[0.99] text-black font-bold py-3.5 rounded-xl mt-2 shadow-[0_4px_20px_rgba(240,108,183,0.3)] transition-all"
                >
                  Publish Event
                </button>
              </form>
            </div>
          </div>
        )}

        {/* 5. Bottom-Sheet Modal: FILTERS */}
        {isFilterOpen && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end justify-center select-none animate-fadeIn">
            <div className="w-full bg-[#0D0E11] border-t border-zinc-800 rounded-t-[30px] p-6 max-h-[70%] overflow-y-auto flex flex-col gap-5 animate-slideUp">

              {/* Drawer Handle */}
              <div className="w-10 h-1 bg-zinc-700 rounded-full mx-auto mb-1"></div>

              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-brandText">filter events</h3>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="w-7 h-7 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-brandText"
                >
                  ✕
                </button>
              </div>

              {/* Category Filter Group */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-zinc-400">Category</label>
                <div className="flex flex-wrap gap-2">
                  {allCategories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setCategoryFilter(cat)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${categoryFilter === cat
                        ? 'bg-brandPink text-black font-bold'
                        : 'bg-black border border-zinc-800 text-brandText hover:border-zinc-500'
                        }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Ticket Price Filter Group */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-zinc-400">Ticket Type</label>
                <div className="flex gap-2">
                  {['All', 'Free', 'Paid'].map(type => (
                    <button
                      key={type}
                      onClick={() => setEntryFilter(type)}
                      className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all ${entryFilter === type
                        ? 'bg-brandPink text-black font-bold'
                        : 'bg-black border border-zinc-800 text-brandText hover:border-zinc-500'
                        }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-2 select-none">
                <button
                  onClick={() => {
                    setCategoryFilter('All');
                    setEntryFilter('All');
                    setIsFilterOpen(false);
                  }}
                  className="flex-1 bg-zinc-900 text-brandText py-3 rounded-xl font-bold hover:bg-zinc-850"
                >
                  Reset
                </button>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="flex-1 bg-brandText text-black py-3 rounded-xl font-bold hover:bg-zinc-200 transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 6. Premium Event Detail Modal */}
        {selectedEvent && (
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 select-none animate-fadeIn">
            <div className="w-full max-w-sm bg-[#0D0E11] border border-zinc-800 rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col max-h-[85%] animate-scaleUp">

              {/* Event Image Banner with Close Button Overlay */}
              <div className="h-44 w-full relative">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E11] via-transparent to-black/40"></div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:bg-black"
                >
                  ✕
                </button>

                {/* Category tag */}
                <div className="absolute bottom-3 left-4 inline-flex items-center gap-1 bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded-md">
                  <TagIcon />
                  {selectedEvent.category}
                </div>
              </div>

              {/* Event Info Details */}
              <div className="p-5 flex flex-col gap-4 overflow-y-auto scrollbar-none">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-brandPink bg-brandPink/10 px-2 py-0.5 rounded-full">
                    {selectedEvent.day} • {selectedEvent.time}
                  </span>
                  <h3 className="text-lg font-bold text-brandText mt-2 leading-tight">{selectedEvent.title}</h3>

                  <div className="flex items-center gap-1.5 mt-2.5">
                    <LocationIcon />
                    <span className="text-zinc-400 text-xs">{selectedEvent.location}</span>
                  </div>
                </div>

                {/* Sub Badges Grid */}
                <div className="flex flex-wrap gap-1.5">
                  {selectedEvent.badges.map((badge, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1 bg-zinc-950 border border-zinc-900 text-zinc-300 text-[10px] px-2.5 py-1 rounded-lg">
                      <span>{badge.emoji}</span>
                      <span>{badge.text}</span>
                    </span>
                  ))}
                </div>

                <div className="border-t border-zinc-900 pt-3">
                  <h4 className="text-xs font-semibold text-zinc-400 mb-1">About the Event</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed font-light">{selectedEvent.description}</p>
                </div>

                {/* Map/Venue Mockup */}
                <div className="bg-zinc-950 border border-zinc-900 rounded-xl p-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 flex items-center justify-center flex-shrink-0 text-brandPink">
                    📍
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Venue Location</h5>
                    <p className="text-zinc-500 text-[10px] truncate">{selectedEvent.location}</p>
                  </div>
                </div>
              </div>

              {/* Sticky bottom CTA in Modal */}
              <div className="p-4 border-t border-zinc-900 bg-zinc-950 select-none">
                <button
                  onClick={() => alert(`Registered for ${selectedEvent.title}!`)}
                  className="w-full bg-brandPink hover:bg-brandPink/95 text-black font-bold py-3 rounded-xl text-xs tracking-wider uppercase shadow-[0_4px_15px_rgba(240,108,183,0.2)] hover:shadow-[0_4px_25px_rgba(240,108,183,0.3)] transition-all"
                >
                  Register Now
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}

// Inner Component for Reusable Event Cards
function EventCard({ event, onClick }) {
  // Check if it is the Debate with entry or Free
  const isDebateWithFee = event.category === 'Debate' && event.badges.some(b => b.text.includes('100 Entry'));

  return (
    <div
      onClick={onClick}
      className="bg-brandCard border border-brandBorder rounded-[20px] p-4 flex justify-between items-start gap-4 hover:border-zinc-800 hover:bg-zinc-950/60 hover:shadow-[0_4px_20px_rgba(0,0,0,0.5)] active:scale-[0.99] transition-all duration-300 cursor-pointer group relative overflow-hidden"
    >
      {/* Event Details (Left side) */}
      <div className="flex-1 flex flex-col">
        {/* Time */}
        <span className="text-brandMuted text-[10px] font-medium mb-1 tracking-wider uppercase">
          {event.time}
        </span>

        {/* Title */}
        <h3 className="text-brandText text-sm font-bold leading-snug group-hover:text-white transition-colors tracking-wide mb-1.5">
          {event.title}
        </h3>

        {/* Location Pin & text */}
        <div className="flex items-center gap-1 text-brandMuted text-[11px] font-normal mb-3">
          <LocationIcon />
          <span className="group-hover:text-zinc-300 transition-colors truncate max-w-[190px]">
            {event.location}
          </span>
        </div>

        {/* Badges Container */}
        <div className="flex flex-wrap items-center gap-1.5 select-none">
          {/* Main Category Badge (Solid white with black text and tag icon) */}
          <span className="inline-flex items-center gap-1 bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded-[5px] shadow-sm">
            <TagIcon />
            {event.category}
          </span>

          {/* Sub Badges */}
          {event.badges.map((badge, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1 bg-black border border-brandBorder text-brandText text-[10px] font-normal px-2 py-0.5 rounded-[5px] group-hover:border-zinc-800 transition-colors"
            >
              <span>{badge.emoji}</span>
              <span>{badge.text}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Event Thumbnail (Right side) */}
      <div className="w-[82px] h-[82px] rounded-[15px] overflow-hidden flex-shrink-0 border border-brandBorder relative group-hover:border-zinc-800 transition-colors">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {/* Soft overlay gradient on hover */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
      </div>
    </div>
  );
}

export default App;
