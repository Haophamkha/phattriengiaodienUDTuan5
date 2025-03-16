const styles = {
  header: {
    container: "flex items-center justify-between bg-white h-16 px-6 py-2 shadow-md rounded-tl-2xl rounded-tr-2xl",
    logoContainer: "flex items-center",
    logoImage: "w-8 h-8 mr-2",
    logoText: "text-pink-500 text-lg font-bold m-0",

    searchContainer: "flex items-center bg-gray-200 text-black px-3 py-2 rounded-1xl w-80",
    searchIcon: "w-5 h-5 mr-2",
    searchInput: "outline-none border-none bg-transparent text-sm w-60",

    navContainer: "flex space-x-4 m-0 p-0 whitespace-nowrap",
    navItem: "no-underline text-sm text-gray-500 cursor-pointer hover:text-pink-500 transition",

    actionContainer: "gap-2 flex items-center",
    button: "bg-pink-500 text-white text-xs cursor-pointer h-8 inline-flex items-center justify-center border-none rounded-2xl px-3 min-w-20 hover:bg-pink-600 transition",
    avatar: "w-8 h-8 rounded-full",
  },

  footer: {
    container: "bg-gray-900 text-white text-left flex pt-2 pb- px-6 rounded-tl-xl rounded-tr-xl",
    leftSection: "w-2/4 pr-12 gap-4",
    rightSection: "w-2/4 flex gap-4",
    flexFooter: "flex w-full",

    footerSection: "flex-1",
    footerSectionh3: "text-lg m-0  font-bold",
    footerSectionUl: "list-none flex flex-col space-y-4 pb-4 ",
    footerSectionLi: "cursor-pointer block hover:underline p-0 !m-0",

    emailBlock: "flex items-center mt-2 w-full gap-2 ",
    emailInput: "p-2 rounded text-sm text-black bg-white w-110 border border-gray-300 ",
    sendButton: "bg-pink-600 text-white cursor-pointer rounded w-20 h-10 text-sm whitespace-nowrap px-2 py-1 border-none",

    footerBottom: "flex items-center flex-no-wrap pt-8 gap-3",
    logoContainer: "flex items-center text-lg font-bold",
    logoImage: "w-8 h-8 p-0",
    footerLinks: "flex gap-3",
    footerLink: "no-underline text-gray-400 text-xs hover:text-white",
  },

  card: {
    gridContainer: "grid grid-cols-4 gap-4 p-4",
    card: "bg-white rounded-lg overflow-hidden shadow-lg flex flex-col p-4",
    image: "w-full h-40 object-cover rounded-lg",
    content: "flex flex-col justify-between mt-2",
    title: "text-base font-bold text-gray-800",
    timeContainer: "flex items-center justify-between mt-2",
    time: "text-pink-500 text-sm",
    bookmark: "w-6 h-6 bg-cover bg-center",
  },

  profile: {
    container: "w-full h-64 text-black",
    header: "w-full h-16 pb-10",
    content: "w-full h-40 flex",
    leftContent: "w-1/5 h-40 flex justify-center items-center",
    rightContent: "w-4/5 h-40 p-2",
    rightText: "text-left text-black mb-10",
    pinkText: "text-pink-500 text-sm",
    title: "text-left text-base font-bold mb-2",
    button: "!bg-pink-500 text-white px-3 py-1 border-none rounded-md cursor-pointer text-sm",
    subShare: "flex items-center gap-1",
    image: "w-full h-full rounded-full object-cover",
  },

  menuItem: {
    tabsContainer: "w-full",
    nav: "flex list-none p-0 m-0",
    navItem: "px-4 py-2 cursor-pointer text-gray-500 text-base font-medium transition duration-300 ease-in-out hover:text-pink-500",
    activeNavItem: "bg-pink-100 text-pink-500 rounded-lg",
  },

  pagination: {
    container: "flex items-center gap-2 justify-end",
    pageBtn:
      "w-8 h-8 border border-black rounded-lg bg-white text-base font-bold text-black cursor-pointer transition duration-300 ease-in-out hover:bg-gray-100",
    activePageBtn: "bg-pink-500 text-black border-black",
    disabledPageBtn: "opacity-50 cursor-not-allowed",
    dots: "px-2 text-base text-black",
  },
};

export default styles;
