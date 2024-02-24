import { Box, Button, Heading, SimpleGrid, Text } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

export const BlogItem = () => {
	return (
		<Box mt='4' p='8' w='80vw' bgColor='#111' mx='auto' borderRadius='25px'>
			<Box>
				<Link to='/'>
					<Button
						variant='outline'
						colorScheme='teal'
						size='lg'
						rounded='md'
						_hover={{ color: 'teal.300' }}
					>
						На главную
					</Button>
				</Link>
			</Box>
			<Box py='4' color='white'>
				<Heading mb='2' as='h2' size='lg' fontWeight='bold' color='white'>
					Test
				</Heading>
				<Box display='flex' gap='15px' alignItems='center'>
					<Text color='gray.300'>22.22.2222</Text>
					<Text size={['md', 'sm']}>
						Теги: <span style={{ color: '#F3EBA2' }}>Tags Tags Tags</span>
					</Text>
				</Box>
				<Box mt='4'>
					<Heading mb='2' as='h2' size='lg' fontWeight='bold'>
						Интересно почитать
					</Heading>
					<SimpleGrid columns={[1, 2, 3]} spacing='40px'>
						{[1, 2, 3, 4, 5, 6].map((index) => (
							<Box key={index} color='#F3EBA2'>
								<Heading as='h3' mb='2'>
									Test Title
								</Heading>
								<Text size={['md', 'sm']}>
									Теги: <span style={{ color: '#F3EBA2' }}>Tags Tags Tags</span>
								</Text>
							</Box>
						))}
					</SimpleGrid>
				</Box>
			</Box>
		</Box>
	);
};
