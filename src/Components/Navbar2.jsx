import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    HStack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  
  export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box>
        <Flex
          bg={useColorModeValue('#141414', '#141414')}
          color={useColorModeValue('#976d33', 'black')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('black', 'black')}
          align={'center'}
          marginTop="-1px"
          >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
        
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('#976d33', '#141414');
    const linkHoverColor = useColorModeValue('#976d33', '#141414');
    const popoverContentBgColor = useColorModeValue('white', '#141414');
  
    return (
      <Stack direction={'row'} spacing={4} >
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}  >
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger >
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'underline',
                    textDecorationColor:'pink.600',
                    textUnderlineOffset:' 20px',
                    textDecorationThickness:'4px'
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  marginTop="3px"
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  width = {"unset"}
                  maxW= {"unset"}>
                  <Stack  display={'grid'} gridTemplateColumns={'repeat(3,250px)'}  spacing={0} >
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    
    let liItem ={
      textAlign:"left",
      padding:"5px",
      lineHeight:"25px",
      color:'black'
    }

    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} width={'250px'}>
          <Box>
            <Text
              color={'black'}
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500} textAlign='left'>
              {label}
            </Text>            
            <Text fontSize={'md'}> <ul>
            {subLabel.map((labels) => (
                    
                    <li  style={liItem}>
                      {labels}
                    </li>
               ))}
            </ul>
            </Text>
          </Box>
          {/* <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex> */}
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('black', 'black')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  const NAV_ITEMS = [
    {
      label: 'MAKEUP',
      children: [
        {
          label: 'LIPS',
          subLabel: [
            'LIPSTICK',
            'WONDER WOMEN LIPSTICK RANGE',
            'LIP CARE',
            'LIQUID LIP COLOURS',
            'LIP GLOSS & LINERS',
            'VALUE SETS',
            'GIFTING'
          ],
          href: '#',
        },
        {
          label: 'FACE',
          subLabel: [
            'PRIMERS',
            'POWDERS/COMPACT',
            'FOUNDATION && BB CREAM',
            'CONCEALERS & CORRECTRS',
            'BLUSH',
            'HIGHLIGHTERS & CONTOUR',
            'BRONZER',
            'FACE PALETTES',
            'VALUE SETS',
          ],
          href: '#',
        },
        {
          label: 'EYES',
          subLabel: [
            'EYELINERS',
            'KAJAL',
            'EYEBROWS',
            'EYESHADOW',
            'MASCARA',
            'EYESHADOW PALETTES',
            'VALUE SETS',
          ],
          href: '#',
        },
      ],
    },
    {
      label: 'BRUSHES',
      children: [
        {
          label: 'FACE BRUSHES',
          subLabel: [
            'Blend Trends Face Brush- 001 Blush',
            'Blend Trend Face Brush - 003 Contour',
            'Blend Trend Face Brush - 006 Highlighter',
            'Blend Trend Face Brush - 007 Powder',
            'Blend Trend Foundation Brush - 052 Kabuki',
            'Blend Trend Dual Face Brush - 075 Powder + Foundation',
          ],
          href: '#',
        },
        {
          label: 'EYES BRUSHES',
          subLabel: [
            'Blend Trend Eyeshadow Brush - 041 Flat',
            'Blend Trend Eyeshadow Brush - 042 Round',
            'Blend Trend Eyeshadow Brush - 043 Round Xl',
            'Blend Trend Dual Eyeshadow Brush - 412 Flat + Round',
            'Blend Trend Dual Eyeshadow Brush - 413 Flat + Round Xl',
          ],
          href: '#',
        },
      ],
    },
    {
      label: 'SKINCARE',
      children: [
        {
          label:"MOISTURIZERS",
          subLabel:[],
          href:'#'
        },
        {
          label:"SUNSCREEN",
          subLabel:[],
          href:'#'
        },
        {
          label:"SETTING MISTS",
          subLabel:[],
          href:'#'
        },
        {
          label:"COFFEE CULTURE RANGE",
          subLabel:[],
          href:'#'
        },
        {
          label:"SHEET MASK COMBO",
          subLabel:[],
          href:'#'
        },
        {
          label:"CITRUS GOT REAL RANGE",
          subLabel:[],
          href:'#'
        },
        {
          label:"AQUAHOLIC RANGE",
          subLabel:[],
          href:'#'
        },
        {
          label:"MASKS",
          subLabel:[],
          href:'#'
        }
      ],
    },
    ,
    {
      label: 'GIFITING',
      children: [
        {

          label:"BLUSHME MERCH STATION",
          subLabel:[],
          href:'#'
        },
        {
          label:"MAKEUP KITS",
          subLabel:[],
          href:'#'
        },
        {
          label:"BESTSELLERS",
          subLabel:[],
          href:'#'
        },
        {
          label:"VALUE SETS",
          subLabel:[],
          href:'#'
        },
        {
          label:"SUGAR SETS",
          subLabel:[],
          href:'#'
        },
        {
          label:"E-GIFT CARDS",
          subLabel:[],
          href:'#'
        },
      ],
    },
    {
      label: 'BLOG',
      children: [
        {
          label: 'MAKEUP',
          subLabel: [
            "FACE",
            "EYES",
            "LIPS",
            "BRIDES",
            "NAILS",
           " HOW TO's",
          ],
          href: '#',
        },
        {
          label: 'SKIN',
          subLabel: [
            "SKIN TYPE",
            "SKIN CONCERNS",
            "HOME REMEDIES & DIYs",
          ],
          href: '#',
        },
        {
          label:'HAIR',
          subLabel:[
            "HAIR CARE",
            "STYLING",
           " HAIR COLOUR",
          ],
          href:'#'
        },
        {
          label:' LIFESTYLE',
          subLabel:[
            "HEALTH & WELLNESS",
            "RRELATIONSHIPS",
          ],
          href:'#'
        },
        {
          label:'FASHION',
          subLabel:[
            "TRENDS",
            "CELEBRITIES",
          ],
          href:'#'
        }
      ],
    },
    {
      label: 'OFFERS',
      // children: [
      //   {
      //     label: '',
      //     subLabel: [],
      //     href: '#',
      //   }
      // ],
    },
    {
      label: 'STORES',
      // children: [
      //   {
      //     label: '',
      //     subLabel: [],
      //     href: '#',
      //   }
      // ],
    },
  ];