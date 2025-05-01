import { AspectRatio, Button, Card, CardContent, IconButton, Typography } from "@mui/joy";

export type LiveCardProps = {
    id: string,
    title: string,
    place: string,
    date: string,
    price: number,
    img: string,
}

function LiveCard({id, title, place, date, price, img }: LiveCardProps) {
    return (
        <Card id={id} sx={{ width: 280 }}>
            <div>
                <Typography level="title-lg">{title}</Typography>
                <Typography level="title-lg">{place}</Typography>
                <Typography level="body-sm">{date}</Typography>
                <IconButton
                    aria-label="bookmark Bahamas Islands"
                    variant="plain"
                    color="neutral"
                    size="sm"
                    sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
                />
            </div>
            <AspectRatio minHeight="120px" maxHeight="200px">
                <img
                    src={`${img}?auto=format&fit=crop&w=286`}
                    srcSet={`${img}?auto=format&fit=crop&w=286&dpr=2 2x`}
                    loading="lazy"
                    alt=""
                />
            </AspectRatio>
            <CardContent orientation="horizontal">
                <div>
                    <Typography sx={{ fontSize: 'lg', fontWeight: 'lg' }}>￥{price}</Typography>
                </div>
            <Button
                variant="solid"
                size="md"
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}>
                取置
            </Button>
        </CardContent>
    </Card>)
}

export default LiveCard;

