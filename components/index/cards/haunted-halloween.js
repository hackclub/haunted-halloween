import CardModel from './card-model'
import { Box, Flex, Grid, Image, Text } from 'theme-ui'
import Buttons from './button'

/** @jsxImportSource theme-ui */

export default function Haunted() {
  return (
    <CardModel
      color="white"
      sx={{
        background: '#fc904e',
        borderRadius: '24px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)'
      }}
      position={[null, 'bottom', 'bottom']}
      highlight="#fc904e"
      visible={true}
    >
      <Grid
        columns={[1, 1, '1.5fr 1fr']}
        sx={{ position: 'relative', alignItems: 'center', zIndex: 2 }}
      >
        {/* LEFT SIDE: Text Content */}
        <Box sx={{ textAlign: ['left', 'left', 'left'] }}>
            <Image
              alt="Haunted Logo"
              src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/cd344d85eb7d1e1992bc53a389352ea015a2e1f6_image.png"
              sx={{

                width: [null, null, '300px', '175px'],
                objectFit: 'cover',
                animation: 'float 4s ease-in-out infinite',
                maxWidth: 'none',
                zIndex: 4
              }}
            />
          <Text
            variant="subtitle"
            sx={{
              color: 'white',
              fontSize: ['18px', '20px'],
              fontWeight: 500,
              lineHeight: 1.5,
              mb: 3,
              display: 'block',
              textAlign: 'left'
            }}
          >
            Make a custom halloween theme for a website, get a sticker and some halloween candy
          </Text>

          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Buttons
              id="haunted-more-info"
              link="/haunted-info.html"
              primary="white"
              color="rgb(50, 70, 110)"
            >
              More Info
            </Buttons>
          </Box>
        </Box>

        {/* RIGHT SIDE: Image */}
        <Flex sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <Box
            sx={{
              position: 'relative',
              height: '200px',
              width: '100%',
              display: ['none', 'none', 'block', 'block'],
              '@keyframes float': {
                '0%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-8px)' },
                '100%': { transform: 'translateY(0)' }
              }
            }}
          >

          </Box>
        </Flex>
      </Grid>
    </CardModel>
  )
}
