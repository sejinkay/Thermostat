def descendant(node)
    desc = []
    temp = children(node)
    while len(temp) > 0:
        x = temp.pop()
        if not x in desc:
            desc.append(x)
    return desc


    //
a -> b -> c -> E
       -> E
       -> D -> F -> G
       -> F
