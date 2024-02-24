import {
	Box,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Heading,
	IconButton,
	Stack,
	useDisclosure,
} from '@chakra-ui/react';

import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Menu = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Flex
				w='100%'
				bgColor='#111111'
				color='white'
				justifyContent='space-between'
				alignItems='center'
				p='8'
				flexDirection={['column', 'row']}
			>
				<Stack
					direction={['column', 'row']}
					spacing={['2', '4', '4', '8']}
					mt={['2', '0']}
					display={['none', 'flex']}
				>
					<Link to='/' style={{ textDecoration: 'none' }}>
						<Flex alignItems='center'>
							<Heading as='h3' size='lg' ml='2'>
								БЛОГ
							</Heading>
						</Flex>
					</Link>
					<Link to='/about' style={{ textDecoration: 'none' }}>
						<Flex alignItems='center'>
							<Heading as='h3' size='lg' ml='2'>
								ОБО МНЕ
							</Heading>
						</Flex>
					</Link>
					<Link to='/projects' style={{ textDecoration: 'none' }}>
						<Flex alignItems='center'>
							<Heading as='h3' size='lg' ml='2'>
								ПРОЕКТЫ
							</Heading>
						</Flex>
					</Link>
				</Stack>
			</Flex>
			<Box display={['block', 'none']}>
				<IconButton
					aria-label='Open Menu'
					position='absolute'
					top='2.5'
					right='2.5'
					icon={<FaBars />}
					onClick={onOpen}
					color='white'
					variant='outline'
				/>
				<Drawer isOpen={isOpen} size='full' placement='right' onClose={onClose}>
					<DrawerOverlay />
					<DrawerContent color='white' bgColor='rgb(28, 28, 28)'>
						<DrawerCloseButton />
						<DrawerHeader>Меню</DrawerHeader>
						<DrawerBody borderTop='5px solid black'>
							<Stack spacing='4'>
								<Link to='/' style={{ textDecoration: 'none' }}>
									<Flex alignItems='center'>
										<Heading as='h3' size='md' ml='2'>
											БЛОГ
										</Heading>
									</Flex>
								</Link>
								<Link to='/about' style={{ textDecoration: 'none' }}>
									<Flex alignItems='center'>
										<Heading as='h3' size='md' ml='2'>
											ОБО МНЕ
										</Heading>
									</Flex>
								</Link>
								<Link to='/projects' style={{ textDecoration: 'none' }}>
									<Flex alignItems='center'>
										<Heading as='h3' size='md' ml='2'>
											ПРОЕКТЫ
										</Heading>
									</Flex>
								</Link>
							</Stack>
						</DrawerBody>
					</DrawerContent>
				</Drawer>
			</Box>
		</>
	);
};
